/**
 *
 * @param s
 * @param selector
 * @param property
 * @param value
 */
function changeStylesheetRule(s, selector, property, value) {
    selector = selector.toLowerCase();
    property = property.toLowerCase();
    value = value.toLowerCase();

    for(var i = 0; i < s.cssRules.length; i++) {
        var rule = s.cssRules[i];
        if(rule.selectorText === selector) {
            rule.style[property] = value;
            return;
        }
    }
    console.log(s.cssRules);
    s.insertRule(selector + " { " + property + ": " + value + "; }", 0);
}