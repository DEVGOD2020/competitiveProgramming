/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    emails = emails.map( 
        (el)=> el.split("@")[0].split("+")[0].replaceAll(".","")+"@"+el.split("@")[1]
    );
    return new Set(emails).size;
};