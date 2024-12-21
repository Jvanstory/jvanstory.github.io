import tkinter as tk
from tkinter import filedialog
import csv

tasks = []

def show_menu():
    print("\n--- To-Do List Menu ---")
    print("1. Add a Task")
    print("2. View All Tasks")
    print("3. Mark Task as Done")
    print("4. Delete a Task")
    print("5. Save Tasks to File")
    print("6. Load Tasks from File")
    print("7. Exit")

def add_task(tasks):
    task = input("Enter your task\n")
    tasks.append(task)
    print("Task Added\n")

def view_tasks(tasks):
    if len(tasks) == 0:
        print("No Tasks\n")
    else: 
        print("Your Tasks:")
        for i in range(len(tasks)):
            print(f"{i + 1}. {tasks[i]}")
    
def task_done(tasks):
    if tasks:
        while True:
            try:
                task_index = int(input("Input the task number completed\n")) - 1
                if 0 <= task_index < len(tasks):
                    tasks[task_index] = tasks[task_index] + " COMPLETED"
                    print("Congratulations\n")
                    break
                else: 
                    print("Invalid task number")
            except ValueError:
                print("Please enter a valid number")
    else:
        print("No Tasks in list")

def delete_task(tasks):
    if tasks:
        while True:
            try:
                task_index = int(input("Input the task number you want to delete\n")) - 1
                if 0 <= task_index < len(tasks):
                    tasks.pop(task_index)
                    print("Task Removed\n")
                    break
                else:
                    print("Invalid Number")
            except ValueError:
                print("Please enter a valid number")
    else:
        print("Your to-do list is empty")

def save_tasks(tasks):
    if tasks:
        with open('ToDoList.csv', 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerows([[task] for task in tasks])
        print("Tasks saved successfully.")
    else:
        print("There are no tasks to save")

def load_tasks():
    root = tk.Tk()
    root.withdraw() 

    print("Opening file dialog...")
    file_path = filedialog.askopenfilename(
        title="Select a CSV file",
        filetypes=[("CSV Files", "*.csv")]
    )
    print("File dialog closed")
    
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

while True:
    show_menu()
    choice = input("Enter a number 1 - 7\n")

    if choice == '1': 
        add_task(tasks)
    elif choice == '2':
        view_tasks(tasks)
    elif choice == '3':
        view_tasks(tasks)
        task_done(tasks)
    elif choice == '4':
        view_tasks(tasks)
        delete_task(tasks)
    elif choice == '5': 
        save_tasks(tasks)
    elif choice == '6':
        load_tasks()
    elif choice == '7':
        print("Exiting Program\n")
        break
    else:
        print("Invalid Choice. Please Try Again\n")

#TODO: load_tasks not working
#TODO: Create user friendly UI
#TODO: figure out different storage system (Right now the only option is to save the list to a csv file)