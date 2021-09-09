# Django React Authentication

This is Django React User Authentication boilerplate.

There's a lot of things going on here, which I am not going to explain here, so before using this you must have a good understanding of: 
- Django and Django restframework, also if you go thru knox docs it will be better.
- React and React Router Dom.
- Formik and Yup (these are used for form validation in the frontend).
- Webpack, this one is not important but please not in this I am using custom config to make Django render React.

### How to use?
- Go ahead and makemigrations and migrate the changes, by using commands - ```python manage.py makemigrations``` and ```python manage.py migrate```.
- Now you can start your Django project by using command ```python manage.py runserver```.
- We are using some commands to compile react into one javascript file ```main.js``` (which you can have a look at package.json); to make it work use command ```npm run dev```.
- The above command will compile file named ```main.js``` in the dir frontend/static/frontend.
- Once that's done go [here](http://127.0.0.1:8000/).

That's all :)
I hope it helps you in your future project. Star on GitHub if you can.