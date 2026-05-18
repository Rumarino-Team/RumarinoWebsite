import os
from PIL import Image

# This script focuses on converting PNG files to WebP format within the 'public' directory.

PUBLIC_DIR = "public"
# We are only targeting .png files for this conversion.
SOURCE_EXTS = {".png"}

def is_valid_webp(path):
    """
    Checks if the given path points to a valid, non-empty file.
    """
    return os.path.isfile(path) and os.path.getsize(path) > 0

def convert_to_webp(src_path, webp_path):
    """
    Converts a source image to WebP format.
    This function is designed for PNGs, ensuring that transparency is preserved.
    """
    with Image.open(src_path) as img:
        # For PNGs, especially those with a color palette, we convert to RGBA
        # to ensure that transparency and color accuracy are maintained.
        if img.mode == "P":
            img = img.convert("RGBA")
        # We use lossless compression for WebP to maintain the quality of the original PNG.
        img.save(webp_path, "WEBP", lossless=True)

def main():
    """
    The main function that orchestrates the conversion process.
    """
    if not os.path.isdir(PUBLIC_DIR):
        print(f"Error: The directory '{PUBLIC_DIR}' was not found.")
        return 1

    converted = 0
    deleted = 0
    errors = 0

    # We walk through all files and subdirectories in the 'public' directory.
    for root, _dirs, files in os.walk(PUBLIC_DIR):
        for filename in files:
            ext = os.path.splitext(filename)[1].lower()
            # We only process files with a .png extension.
            if ext not in SOURCE_EXTS:
                continue

            src_path = os.path.join(root, filename)
            webp_path = os.path.splitext(src_path)[0] + ".webp"

            try:
                # If a valid WebP image already exists, we remove the original PNG.
                if os.path.exists(webp_path) and is_valid_webp(webp_path):
                    os.remove(src_path)
                    deleted += 1
                    continue

                # Perform the conversion from PNG to WebP.
                convert_to_webp(src_path, webp_path)

                # After conversion, we check if the WebP file is valid.
                if not is_valid_webp(webp_path):
                    raise RuntimeError("The WebP file was not created or is empty.")
                
                converted += 1
                print(f"Successfully converted {src_path} to {webp_path}")

                # Finally, we remove the original PNG file.
                os.remove(src_path)
                deleted += 1

            except Exception as e:
                errors += 1
                print(f"An error occurred while processing {src_path}: {e}")

    print(f"Operation finished. Converted files: {converted}, Deleted files: {deleted}, Errors: {errors}.")
    return 0 if errors == 0 else 2

if __name__ == "__main__":
    raise SystemExit(main())