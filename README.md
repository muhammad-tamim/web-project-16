# Project Name: 

## Project Description:

## Live Site Link:

## Project Video:

## What I Learned New while Building This Project:

1. how to Convert different date formats into a readable date
```js
function formatDate(value) {
    if (!value) return "";

    const num = Number(value);

    if (value.length === 10) {
        return new Date(num * 1000).toDateString();
    }

    if (num < 100000) {
        return new Date(num * 24 * 60 * 60 * 1000).toDateString();
    }


    return new Date(num).toDateString();
}
```
- if (!value) return "";
  - If the date is empty (like ""), immediately return an empty string.

- const num = Number(value);
  - Converts the string (e.g., "16278") into a number (16278).

- if (value.length === 10)
  - If the string has 10 characters, it’s probably a Unix timestamp in seconds (1672656000).

  - ```new Date(num * 1000).toDateString();```
  - Multiply by 1000 (convert seconds → milliseconds).
  - Convert into a readable date like "Mon Jan 02 2023".

- if (num < 100000)
  - If the number is small (like 16278), treat it as days since Jan 1, 1970.
  
  - ```return new Date(num * 24 * 60 * 60 * 1000).toDateString();```  

    - 1 day = 24 hours × 60 minutes × 60 seconds × 1000 ms = 86400000 ms.
    - Multiply num days by 86400000 → you get the exact milliseconds.
    - new Date(milliseconds) automatically starts from Jan 1, 1970.

- return new Date(num).toDateString();
  - If it didn’t match the above cases, just assume it’s already in milliseconds.

## Challenges I faced while Building This Project:

## Contact With Me: 

tamim.muhammad2005@gmail.com | https://www.linkedin.com/in/tamim-muhammad | +8801586090360 (WhatsApp)

---

Thank you so much for checking out my project! If you have any suggestions or feedback, feel free to share them.

