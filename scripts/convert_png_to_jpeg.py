from PIL import Image
import os

# Directory containing PNG images
png_dir = os.path.join(os.path.dirname(__file__), 'public')

for filename in os.listdir(png_dir):
    if filename.lower().endswith('.jpeg'):
        png_path = os.path.join(png_dir, filename)
        jpeg_path = png_path[:-4] + '.jpeg'
        with Image.open(png_path) as img:
            rgb_img = img.convert('RGB')
            rgb_img.save(jpeg_path, 'JPEG', quality=92)
        print(f'Converted {filename} to {os.path.basename(jpeg_path)}')
