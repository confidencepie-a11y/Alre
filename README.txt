WALLET APP
==========

A dark-theme bank wallet app, built from the supplied mockup.

FILES
-----
index.html     App structure (home screen, Cards and User tabs, bottom nav)
style.css      All styling
script.js      Balance, hide/show toggle, "Updated" label, transactions, tabs
manifest.json  Web app manifest (name, colors, icon) for adding to a home screen
README.txt     This file

HOW TO RUN
----------
1. Keep all five files in the same folder.
2. Open index.html in any modern browser.

For the best phone experience, serve the folder over HTTP(S) (for example
with "npx serve" or any static host) and open it on your phone. In the
browser menu choose "Add to Home Screen" to launch it full screen.

WHAT IT DOES
------------
- Balance starts at $0 on first launch.
- Tap the eye icon to hide or show the balance.
- "Updated ..." label counts up while the app is open.
- Transaction History shows the sample rows from the mockup.
- Bottom tabs switch between Home, Cards and User.
- Send, Receive, QR Code and Add are buttons only for now; no actions are wired.

NOT INCLUDED (as requested)
---------------------------
- iPhone status bar from the mockup picture
- Bottom home-indicator bar from the mockup picture
- Expense and Income stats under the balance

CUSTOMISING
-----------
- Change the starting balance: edit "var balance = 0;" in script.js.
- Edit or remove transactions: edit the "transactions" list in script.js.
  Set it to [] to start with an empty history.
- Colors and sizes: edit the variables at the top of style.css.
- Profile photo: replace the initial letter in the ".avatar" element in
  index.html with an <img> tag.

NOTES
-----
- The font (Inter) loads from Google Fonts; without internet the app falls back
  to the system font.
- There is no service worker, so the app does not work offline yet.
