import tkinter as tk
from tkinter import filedialog
tasks = []

def load_tasks():
    root = tk.Tk()
    root.withdraw() 

    print("Opening file dialog...")
    file_path = filedialog.askopenfilename(
        title="Select a CSV file",
        filetypes=[("CSV Files", "*.csv")]
    )
    print("got here")
    if file_path:
        print(f"Selected file: {file_path}")
        try:
            with open(file_path, 'r') as f:
                reader = csv.reader(f)
                tasks.clear()  
                for row in reader:
                    if row:
                        tasks.append(row[0])
            print("Tasks loaded successfully.")
        except Exception as e:
            print(f"Error reading file: {e}")
    else:
        print("No file selected")

load_tasks()