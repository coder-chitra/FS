enum UserRole {
    Admin,
    Editor,
    Viewer
}

function showRole(role: UserRole): void {
    switch (role) {
        case UserRole.Admin:
            console.log("Welcome Admin");
            break;

        case UserRole.Editor:
            console.log("Welcome Editor");
            break;

        case UserRole.Viewer:
            console.log("Welcome Viewer");
            break;
    }
}

showRole(UserRole.Admin);
showRole(UserRole.Editor);
showRole(UserRole.Viewer);