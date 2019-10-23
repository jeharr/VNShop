Hi Venue Next! I just wanted to say that I had a lot of fun building this out. I have a lot of e-commerce experience so I felt right at home with this task. That said, it's a simple marketplace app but it functions well. You are able to see the catalog of products, add qty if the product is available, and see all of the Lines added up in a cart view for a grand total.

I know it wasn't specifically requested but just to do a little extra, I implemented item qty so that the catalog and cart show the qty amounts of each item added as well as the total line amount in the cart. When an item is removed, it removes all the qty of that item from the cart. The next thing I would have added to this is putting in the functionality to adjust the qty of an item without removing the item completely.

Requirements for running:

An up to date stable version of Node.js

parcel.js https://parceljs.org/getting_started.html

to run in browser run "npm install" and then "npm start" in your terminal from the project folder

note: if there is an issue it may be with parcel.js and might be fixed with a global install of parcel-bundler

TEST PLAN:

(in terminal)

- run npm install

- run npm start

- once project builds, see which port the project is being served on (default is localhost:1234 but could be different)

- go to localhost of the specified port in your browser of choice

(in browser at localhost)

- add 3 qty of tshirt

- verify that the qty is updated for product in by the product info as well as in the cart qtyTotal in the top right

- add 1 qty of jacket and 1 qty of skirt

- verify that the quantites and grand total are correctly adjusted

- attempt to add qty of shorts

- verify that you are unable to and that there is no adjustment to the cart qty or subtotal

- in the top right nav bar, click on the cart amount/subtotal to navigate to the cart

- verify that the view has changed correctly to show the cart contents

- attempt to remove any line

- verify that the cart qty and subtotal reflect the change from the line removal

- click empty cart at the bottom

- verify that all lineitems have been removed and that the cart qty has been set back to 0 and the subtotal back to 0.00


(note: you may have to scroll up in the cart view to see the navbar)

If there are any further questions or issues, you can reach me at jeff.w.harrison86@gmail.com
