# gonsalves-fitness
Gonsalves Fitness PT Website

# changelog

## 20.05.20

landing page and about page now scroll to top on pageload
fixed quote marks on feature cards
fixed positioning issues for profile img on feature cards
sticker height set to max on mobile devices
simplified booking pricing lists
admin page nav, last button no longer dissapears on mobile view
admin page nav, icons have now been re-aligned to match largest icons
admin page nav, swapped logout with settings tab
  --admin cms now portrait for mobile view
login username field is now case in-sensitive


#

## 20.05.19

* Booking page now built, with links to external booking app.
* UI
  * Mobile
    - Booking page now optimised for mobile

#

## 20.05.14
* Functionality
  - Contact form now sends a copy to the end user, with a reply-to to your email address.
* UI
  * Mobile
    - Landing page now optimised, specifically around the About sections.
    - Footer now spaces the linkå columns
    - Contact form now closes if msg is successful.

* Bug Fixes
  - Admin Nav bar now unmounts upon logging out, and not after.
  - Admin login page - Back to site button doesn't call the login form.
  - Admin Logout now respects the app's redirect rules to redirect you on logout.
  - Footer 'Contact' link now calls in promise, so always scrolls you to the contact form once the page loads.

#


gco ## 20.05.13
* Operations
  * Domain
    - Website is now live! Domain `gonsalvesfitness.co.uk` is now succesfully pointing to Heroku and all child pages load correctly.
    >Note that we're still on a free version of Heroku, so the website goes to sleep after an hour of in-activity and takes 30 seconds to wake up!
* UI
  * Global
    - Your image in the 'About' section, should now always behave as to keep your merch branding in view.
    - Featured success story 'Cards' now have fixed size and match the size and behavior of the USP cards.
    - Spruced up the 'Edit' and 'Create' forms, for a bit more clairty around image uploads section and publish/submitting section.
    - Added a tab above the content table to allow you to create more conent. In the future, these tabs will show more editable sections of available content for your website.
  * Mobile
    - Hero Logo now scales appropriately on mobile
    - 'About' section has a new format for mobile view
    - Contact form terms checkbox is now normal size for mobile
* Bug Fixes
    - Upon logging out, page will always re-direct you to the login page (100%).

#

## 20.05.12
* CMS
    * Security
      - 401 pages now display if an unauthorized-user tries to naviate to a password-protected page.
      - 404 pages now displayed if a user types an incorrect address in address bar.
      - You can now update your password! This requires you to include current password for security. There are currently no rules on what your password can be. !! Currently No UI Response when you update your password, will be added in next changelog.
  * Functionality 
      - You can now delete messages! Just click the trash icon, and confirm on prompt.
      - Content 'Create' page looks and functions same as 'Edit' page.
  * UI
      - 'Create' and 'Edit' pages now crop the 'Profile' image in a circle, representing how they will look on the landing page when published.
      - Removed database ID from tables (this was just used for dev debugging).
      - Alternate rows are now formatted differently for clarity.
      - Only 10 rows of any given content will be visable in a table, scroll down to see more.
      - Messages now dont show the entire message in the table. It'll show you a variable amount depending on how large your screen is.
      - Added border to currently active CMS page on nav-bar icon.
      - Themes now update your icon colors! Icons will automatically update to be the opposite color given from your background image, and icon border will be a matching color.

#

## 20.04.30

* Operations
  * Storage
    - Google Firebase storage/images now writing filenames as: `date_clientName_uploadTarget`
  * Hosting
    - Site now live! Hosted over at Heroku! Site can be found at http://gonsalves-fitness.herokuapp.com
  * Database
    - Live database now hosted with MongoAtlas, away from Heroku's Mlabs integration. 
    - Dump script built to dump remote database as JSON object to local machine.