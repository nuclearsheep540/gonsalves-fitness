# gonsalves-fitness
Gonsalves Fitness PT Website


# changelog

## 20.05.14

* CMS:
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



## 20.04.30

* Operations:
  * Storage
    - Google Firebase storage/images now writing filenames as: `date_clientName_uploadTarget`
  * Hosting
    - Site now live! Hosted over at Heroku! Site can be found at http://gonsalves-fitness.herokuapp.com
  * Database
    - Live database now hosted with MongoAtlas, away from Heroku's Mlabs integration. 
    - Dump script built to dump remote database as JSON object to local machine.