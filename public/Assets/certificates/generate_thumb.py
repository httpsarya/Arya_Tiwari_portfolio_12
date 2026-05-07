import fitz  # PyMuPDF
import sys

def pdf_to_thumb(pdf_path, thumb_path):
    doc = fitz.open(pdf_path)
    page = doc.load_page(0)  # first page
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # Scale for better resolution
    pix.save(thumb_path)
    print(f"Saved {thumb_path}")

pdf_to_thumb("Explore_ML_using_python.pdf", "explore_ml_thumbnail.png")
