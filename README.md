# eltoncrego.com v9

This version of my site was created when I made the switch to join [LinkedIn](linkedin.com) as a software engineer. It is still being worked on. This README will cover development and architectural decisions as I make them.

## File Organization

The main rule to follow: **Files from one module can only import from ancestor folders within the same module or from src/shared**

| File or Folder | Description                               |
| -------------- | ----------------------------------------- |
| src/app        | Main application files and routes         |
| src/shared     | Shared, isolated components, styles, etc. |
