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
        
        # Find all files ending in .jpg or .jpeg (case-insensitive)
        if filename.lower().endswith(('.jpg', '.jpeg')):
            
            # Create the full path for the input file
            jpg_path = os.path.join(public_dir, filename)
            
            # Create the output path by replacing the extension with .webp
            # os.path.splitext() correctly handles both .jpg and .jpeg
            base_filename = os.path.splitext(filename)[0]
            webp_path = os.path.join(public_dir, base_filename + '.webp')

            try:
                # Open the JPEG image
                with Image.open(jpg_path) as img:
                    
                    # Convert to RGB. This is a good safety step
                    # in case the source JPG is in CMYK color mode.
                    rgb_img = img.convert('RGB')
                    
                    # Save the image as WebP
                    # 85 is a good default quality for WebP (balances size and clarity)
                    rgb_img.save(webp_path, 'WEBP', quality=85)
                    
                # Print a minimal confirmation, just like your script
                print(f'Converted {filename} to {os.path.basename(webp_path)}')
                
            except Exception as e:
                print(f"Error converting {filename}: {e}")
