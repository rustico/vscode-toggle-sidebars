'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    [['extension.toggleExplorer', 'workbench.view.explorer'],
     ['extension.toggleDebug', 'workbench.view.debug'],
     ['extension.toggleSearch', 'workbench.view.search'],
     ['extension.toggleExtensions', 'workbench.view.extensions'],
     ['extension.toggleGit', 'workbench.view.git']
    ].forEach((menu) => {
        let disposable = vscode
            .commands
            .registerCommand(menu[0], toggleSideBar(menu[1]));

        context.subscriptions.push(disposable);
    });
}

let current;
function toggleSideBar(sideBar) {
    return () => {
        console.log(sideBar, current);
        if (current === sideBar) {
            vscode.commands.executeCommand("workbench.action.toggleSidebarVisibility");
            current = null;
        } else {
            vscode.commands.executeCommand(sideBar);
            current = sideBar;
        }
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}