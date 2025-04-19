import sys
import os
from PyQt5.QtWidgets import QApplication, QMainWindow, QToolBar, QAction
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtCore import QUrl
import settings

class CustomBrowser(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("ShockBrowser")
        self.setGeometry(100, 100, 1200, 800)

        self.browser = QWebEngineView()
        self.browser.setUrl(QUrl.fromLocalFile(settings.START_PAGE))
        self.setCentralWidget(self.browser)

        toolbar = QToolBar()
        self.addToolBar(toolbar)

        back_btn = QAction("←", self)
        back_btn.triggered.connect(self.browser.back)
        toolbar.addAction(back_btn)

        forward_btn = QAction("→", self)
        forward_btn.triggered.connect(self.browser.forward)
        toolbar.addAction(forward_btn)

        reload_btn = QAction("⟳", self)
        reload_btn.triggered.connect(self.browser.reload)
        toolbar.addAction(reload_btn)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = CustomBrowser()
    window.show()
    sys.exit(app.exec_())
