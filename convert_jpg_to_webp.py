import os

from PIL import Image


PUBLIC_DIR = "public"
SOURCE_EXTS = {".png", ".jpg", ".jpeg"}


def is_valid_webp(path):
    return os.path.isfile(path) and os.path.getsize(path) > 0


def convert_to_webp(src_path, webp_path):
    ext = os.path.splitext(src_path)[1].lower()

    with Image.open(src_path) as img:
        if ext in {".jpg", ".jpeg"}:
            img = img.convert("RGB")
            img.save(webp_path, "WEBP", quality=85)
        else:
            # PNG: keep alpha; palette PNGs need conversion.
            if img.mode == "P":
                img = img.convert("RGBA")
            img.save(webp_path, "WEBP", lossless=True)


def main():
    if not os.path.isdir(PUBLIC_DIR):
        print(f"Error: Directory not found at '{PUBLIC_DIR}'")
        return 1

    converted = 0
    deleted = 0
    errors = 0

    for root, _dirs, files in os.walk(PUBLIC_DIR):
        for filename in files:
            ext = os.path.splitext(filename)[1].lower()
            if ext not in SOURCE_EXTS:
                continue

            src_path = os.path.join(root, filename)
            webp_path = os.path.splitext(src_path)[0] + ".webp"

            try:
                if os.path.exists(webp_path) and is_valid_webp(webp_path):
                    os.remove(src_path)
                    deleted += 1
                    continue

                convert_to_webp(src_path, webp_path)
                if not is_valid_webp(webp_path):
                    raise RuntimeError("WebP output was not created")
                converted += 1
                print(f"Converted {src_path} -> {webp_path}")

                os.remove(src_path)
                deleted += 1

            except Exception as e:
                errors += 1
                print(f"Error processing {src_path}: {e}")

    print(f"Done. Converted: {converted}, Deleted: {deleted}, Errors: {errors}.")
    return 0 if errors == 0 else 2


if __name__ == "__main__":
    raise SystemExit(main())