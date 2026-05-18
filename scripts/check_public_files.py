import glob
import os
from pathlib import Path
import re



# We need to crate an standard to which we name our photos and videos
# so that find them and  deal with them is faster and easier
# 

PUBLIC_DIR = "../public"
MEMBER_EXPRESSION = "todo"

public_files = glob.glob(PUBLIC_DIR)
member_files = []
videos_files = []

def main():
    for file in public_files:
        member = re.match(MEMBER_EXPRESSION,file)
        if member:
            # mo




if __name__ == "__main__":
    main()