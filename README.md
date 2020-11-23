# cmscart-express

BUILDING A CMS SHOPPING CART USING EXPRESS

## The Project

### 03 project setup 1

        new file:   - Shortcut.lnk
        modified:   .gitignore
        modified:   README.md
        new file:   package.json

### 04 project setup 2

        >> npm install -g nodemon
        >> npm install --save express ejs
        modified:   README.md
        new file:   app.js
        new file:   package-lock.json
        modified:   package.json

### 05 connecting to mongodb

        >> npm install --save mongoose
        modified:   app.js
        new file:   config/database.js
        modified:   package-lock.json
        modified:   package.json

### 06 templates

        modified:   README.md
        modified:   app.js
        new file:   views/index.ejs
        new file:   views/shared/adminfooter.ejs
        new file:   views/shared/adminheader.ejs
        new file:   views/shared/footer.ejs
        new file:   views/shared/header.ejs

### 07.1 routes setup - Home route

        modified:   README.md
        modified:   app.js
        new file:   routes/pages.js

### 07.2 routes setup - Admin route

        modified:   README.md
        modified:   app.js
        new file:   routes/admin_pages.js
        modified:   routes/pages.js

### 08 getting more packages

        >> npm install --save body-parser
        >> npm install --save express-session
        >> npm install --save express-validator
        >> npm install --save express-messages
        >> npm install --save connect-flash
        modified:   README.md
        modified:   app.js
        modified:   package-lock.json
        modified:   package.json
        new file:   views/messages.ejs
        modified:   views/shared/adminheader.ejs
        modified:   views/shared/header.ejs

### 09 creating the page model

        modified:   README.md
        new file:   models/page.js

### 10 get add page

        modified:   README.md
        modified:   routes/admin_pages.js
        new file:   views/admin/add_page.ejs
        modified:   views/shared/adminfooter.ejs
        modified:   views/shared/adminheader.ejs

### 11 post add page 1

        modified:   README.md
        modified:   app.js
        modified:   routes/admin_pages.js
        modified:   views/admin/add_page.ejs
        modified:   views/shared/adminheader.ejs

### 12 post add page 2 (Insert and save post to db)

        modified:   README.md
        modified:   routes/admin_pages.js

### 13.1 admin pages index

        modified:   README.md
        modified:   routes/admin_pages.js
        new file:   views/admin/pages.ejs

### 13.2 (corecting link) admin pages index

        >> corecting link from: href="/admin/pages/add-pages"
        >> to
        >> corecting link from: href="/admin/pages/add-page"

### 14 admin pages sorting

### 15 get edit page

### 16 post edit page

### 17 wysiwig and delete page

### 18 admin categories model and route setup

### 19 categories index

### 20 add category

### 21 edit category

### 22 edit pages bug fix

### 23 delete category

### 24 products model route and packages setup

### 25 products index

### 26 get add product

### 27 post add product

### 28 get edit page

### 29 edit product view

### 30 post edit product

### 31 upload gallery images

### 32 delete gallery image

### 33 delete product

### 34 front menu display

### 35 admin page changes not reflected in frontend fix

### 36 display page content

### 37 front display categories

### 38 display all products

### 39 display products by category

### 40 display product details

### 41 cart route and header display

### 42 add to cart

### 43 checkout page

### 44 cart updating

### 45 clear cart

### 46 adding paypal checkout

### 47 enhancing checkout

### 48 user model and passport setup

### 49 register view

### 50 register post

### 51 login

### 52 logout

### 53 access control

### 54 adding more text and headings to pages
