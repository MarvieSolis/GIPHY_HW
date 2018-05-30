# GIPHY_HW

## The Function of This Program
This is a superhero comic book themed search engine which utilizes GIPHY's API. The user can select one of the buttons initially displayed in order to show 10 GIFs and ratings related to the selected term. Buttons on the right can change the GIFs displayed to either 10, 15, or 20 on the page. The user can also enter a new term in the input text box on the right. Whatever is entered will generate a new button next to the pre-existing buttons. Users are not allowed to submit a blank form or an already existing entry. Users also have the ability to pause and play the GIFs on command by clicking the desired images.

The script file consists of **jQuery**, **Javascript**, and **AJAX** functions. AJAX is used to grab the information about the desired content using **GIPHY's API**. The returned data is then used to present GIFs and their ratings on the page. **On-click** functions are used for the Submit button, Limit buttons, GIF buttons, and the GIFs themselves. Functions such as **attr** are used to change and access certain attributes of the images and buttons.  

As for the CSS and HTML, **bootstrap** as used to create the layout. I went for a comic theme using backgrounds inspired by comic books. Bootstrap fluid containers were used to keep all the divs and their compenents directly next to each other. Fonts were pulled from [Goolgle Fonts](fonts.google.com) and icons were used from [Fontawesome](fontawesome.com).


## The Usefulness
Using this website and upon inspection of the code can help people understand how to utilize AJAX and APIs. This website also shows how to use jQuery to create On-Click functions and generate DIVS and Buttons dynamically. As for general use, this website is good for searching for related GIFs for ANY term, although the page is superhero comic themed.


## Getting started
People can learn more about using jQuery by looking through websites such as [jQuery.com](https://www.jquery.com/) or [w3schools](https://www.w3schools.com/jquery/default.asp). To learn more about APIs, people can visit [Mulesoft](https://www.mulesoft.com/resources/api/what-is-an-api) and read about what they are and how they are utilized.