// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('novnc.openWireshark', () => {
		  // Create and show panel
		  const panel = vscode.window.createWebviewPanel(
			'catCoding',
			'NoVNC',
			vscode.ViewColumn.One,
			{
			  // Enable scripts in the webview
			  enableScripts: true
			}
		  );
	
		  // And set its HTML content
		  panel.webview.html = getWebviewContent();
		})
	  );
	}
	//<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
	// <iframe width="100%" height=650px" src="https://www.google.com/webhp?igu=1" title="Google">
	  //  </iframe>
	  //<iframe width="100%" height=800px" src="http://scastro-virtualbox:8080/vnc.html" title="NOVNC">
	function getWebviewContent() {
	  return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Google</title>
	</head>
	<body>
		<iframe width="100%" height=800px" src="http://localhost:8080/" title="NOVNC">
		</iframe>
	</body>
	</html>`;
	}
