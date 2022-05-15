# `ECOMMERCE website` : PC PRO DZ

## `Developers`

### `'`Keziz Mouayed`'`--`"`Bouchenacha Moncef`"`--`'`Hammoutene Amine`'`

## `Commit-12`

add second nav bar \
 made the website more responsive \
 smoth zoom animation (categorie section (landing page)) \
 add filters and searsh result ( working on filters configuration) \
 simple html routing \
 reduce the size of the components by 20% \
 first react app (landing page) (problem : cannot link product_carousel.js with react app) \

## `Commit-13`

cannol link product_carousel.js with react app : fixed\
 items are being more and more mapped\
 working on a dynamic way to display products in a carousel and a dynamic details page for each peoduct\

## `Commit-14`

work more on css \
add animation to the carousel of products\
divide the code into several componants:\
-MainNavigationBar\
-SecondaryNavigationBar\
-CarouselImageSlider\
-NewProductsSection\
-CarouselItem\
-MostVisitedCathegories\
-PcprodzInformationLabel\
-Footer\

## `Commit-15`

work more on components\
start working on pages (HomePage, ProductPage)\
functional routing system (react-router-dom)\
can navigate through the homepage to the product page\
didnt pass the date to the product page so its curently empty\\

## `Commit-16`

load data dynamically from the front end\
work more on the routing system\\

## `Commit-17`

dynamic product page is being generated dynamically for each route\\

## `Commit-18`

create a backend server working on port 5000 (front is working on port 3000)\
the data is being fetched from the backend\\

## `Commit-19`

data base\\

## `Commit-20`

redux\\

## `commit-21`

login post request\\

## `commit-22`

fully fonctional login with auto redirection from the "/login" url \
and the option to logout , some changes in the user model and router in the backend folder \
basic search in the backend using the startwith method \\

## `commit-23`

fully fonctional register with auto redirection from the "/register" url \
some changes in the user model and router in the backend folder \\

## `commit-24`

cart page \\

## `commit-25`

buttons handeling in the product page \
fonctional add to cart \
semi fonctional cart page mapping \\

## `commit-26`

add profile page \\

## `commit-27`

product search api ("pi/products/search") \\

## `commit-28`

fully functional cart page including cart items mapping and dynamic total price \
the option to increase , decrease or remove an item from the cart \\

## `commit-29`

orderModels, orderActions : create order, reducers \
il reste de l'associer avec le front \\

## `commit-30`

components: filter tag, search item
pages : search page\\

## `commit-31`

link the search api with the search page\
mapping search page\
removable filte tags
functionnal search routing\\

## `commit-31.1`

images-- styles\\

## `commit-32`

some fixes here and there \
turend the wilaya to required in the DB , updated the created user in the user router \
updated the register form and the useractions to be compatible with the backend \
created placeorder component and removed the personal informations from the cart page \
turned the search box to a form removed the null search option \
for the search page display hello world in case no product is found as a placeholder \\

## `commit-33`

update in the search box functionallity and style \
fetching suggestions from the backend the filtering the data according to what is been inserted \
it displays the range 0-7 unique products names to auto fill the search bar \
with no redirect when a suggestion is chosen \\

## `commit-34`

fix the size of the images in main carousel\
make the main carouselmore responsive\
edit the profile page (profile informations - edit informations - edit password)\
make it responsive and add buttons of saving and canceling\
the layout is ready for teh bacckend work with , didnt give much importance for the ui\
fixed link icons in the profile page\
there is no more figma slides (client side) so probably imma work on the admin side\
\
\

note:\
in ProfilePage.js u will find 3 components (2 are commented) with some anchors and buttons (someone needs to route link everything with each other)\

## `commit-35`

abondonate every modification that has been done for the main carousel\
create a AdminPage with route /admin (only template)\
use the same logic of the profile page where the menu is static and the rest is a groupe of components/
one admin component was created (add new product)\
create api that adds a product to the DB\
create an api that deletes a product from the DB\
the suggestion api has to look inside all attributes, not only \
make MostVisitedCathegories a little bit more responsive\
the website zoom is being improved (70% of the previous zoom even if the zoom is 100%)\\

## `commit-36`

added cart array to the user model \
added the post rout cart save to the userRouter \
new cartAction saveInDb function \
copying the cart array from DB during the login action \
giving the cart compounent access to the signinstate in order to use the saveInDb action \\

## `commit-36.1`

it basicly add the content of the local storage cart to the DB cart array \
then fills the local storage cart with the new DB array and keeps everything synced \\

## `commit-36.9 fi khater moncef`

some css modification for the new product section (more responsive / display more products)\
fix the website zoom (zoom out to 20 percent and the website will stay with its format (centred) just try it) (not sure if the carousel will be included in this shift or no, but its included in this demo version)\
create api : "user/edit" tested\
create api : "user/changepassword" tested\
route the profile page with all its components\
navigation through profile components\
edit profile informations frontend is linked with backend tested\
change password frontend is linked with backend tested\
need to display loading and error in both applications

## `commit-37`

added the admin router component to protect the route /admin \
added the admin route in the navBar if userInfo.IsAdmin \
setting up the admin api by moving the add and delete prouduct to the adminrouter in the backend \\

## `commit-38`

admin now creat new products \
added the middlewares isAuth and isAdmin to the admin API \
added creat product action to productAction with its constants and reducesrs\
functional addProduct component while keeping the array maping for more dynamic page \\

## `commit-38.1`

fix the token issue

## `commit-39`

added the category filter in search api router in backend \
and limited the search by name \
new product constants and reducers \
added listProductCategories action and modified the listProducts \
moved the searchBox URL \
A dynamic categories list in the second navbar with routing \
moddified the search page in order to support the filters query \

## `commit-40`

updating new products section by acctually showing the most recent added products \
the full bundle of a routuer in the products api located in /recent \
new product action called listmostrecent with its reducers and constants and state in the store.js \
linking the work done with newproductsSection component \\

## `commit-40.1`

routed most visited categories \
bug fix in listing products for the search page \
setup the sort api in the seaarch page by adding a dropdown menu \\

## `commit-41`

admin route\
orders page\
order page\\

## `commit-42`

filter configuration component\
newSearshItem\
shipingPage with its route\

## `commit-43`

fix up order API \
added sorting in product search API \
functional sorting the search page \
setting up placeorder for functionallity in the front \\

## `commit-44`

created api (get orders, get order, treat order, seed orders)\
link get orders with frontend (used redux)\\

## `commit-44.1`

link treat order api with the front (handling treat product)\\

## `commit-45`

bezzaf swal7 \\

## `commit-45.1`

product page (admin side)\
edit and delete\\

## `commit-46`

lot of frontend\\

## `commit-677`

i'm on fire \\

## `commit-48`

bzf swale7\\
