from PIL import Image
import os

# Set the directory containing your images (e.g., 'public')
# This assumes the 'public' folder is in the same directory as this script
try:
    public_dir = os.path.join(os.path.dirname(__file__), 'public')
except NameError:
    # Fallback for when __file__ is not defined (e.g., in a REPL)
    public_dir = os.path.join(os.getcwd(), 'public')

# Check if the directory exists before proceeding
if not os.path.isdir(public_dir):
    print(f"Error: Directory not found at '{public_dir}'")
else:
    # Loop through all files in the directory
    for filename in os.listdir(public_dir):
        
        # Find all files ending in .png (case-insensitive)
        if filename.lower().endswith('.png'):
            
            # Create the full path for the input file
            png_path = os.path.join(public_dir, filename)
            
            # Create the output path by replacing the extension with .webp
            base_filename = os.path.splitext(filename)[0]
            webp_path = os.path.join(public_dir, base_filename + '.webp')

            try:
                # Open the PNG image
                with Image.open(png_path) as img:
                    
                    # Save the image as WebP
                    # Use lossless=True to preserve transparency and quality,
                    # which is usually desired for PNG conversions.
                    img.save(webp_path, 'WEBP', lossless=True)
                    
                # Print a minimal confirmation
                print(f'Converted {filename} to {os.path.basename(webp_path)}')
                
            except Exception as e:
                print(f"Error converting {filename}: {e}")