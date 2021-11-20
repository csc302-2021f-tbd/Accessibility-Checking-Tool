
export function fn(dom){
    let output = "Error: HTML element missing language attribute";
    let errors = 0;
    let allLangs = ["ab", "aa", "af", "ak", "sq", "am", "ar", "an", "hy", "as", "av", "ae", "ay", "az", "bm", "ba", "eu", "be", "bn", "bh", "bi", "bs", "br", "bg", "my", "ca", "ch", "ce", "by", "zh", "zh-Hans", "zh-Hant", "cv", "kw", "co", "cr", "hr", "cs", "da", "dv", "nl", "dz", "en", "eo", "et", "ee", "fo", "fj", "fi", "fr", "ff", "gl", "gd", "gv", "ka", "de", "el", "kl", "gn", "gu", "ht", "ha", "he", "hz", "hi", "ho", "hu", "is", "io", "ig", "id, in", "ia", "ie", "iu", "ik", "ga", "it", "ja", "jv", "kl", "kn", "kr", "ks", "kk", "km", "ki", "rw", "rn", "ky", "kv", "kg", "ko", "ku", "kj", "lo", "la", "lv", "li", "ln", "lt", "lu", "lg", "lb", "gv", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mh", "mo", "mn", "na", "nv", "ng", "nd", "ne", "no", "nb", "nn", "ii", "oc", "oj", "cu", "or", "om", "os", "pi", "ps", "fa", "pl", "pt", "pa", "qu", "rm", "ro", "ru", "se", "sm", "sg", "sa", "sr", "sh", "st", "tn", "sn", "ii", "sd", "si", "ss", "sk", "sl", "so", "nr", "es", "su", "sw", "ss", "sv", "tl", "ty", "tg", "ta", "tt", "te", "th", "bo", "ti", "to", "ts", "tr", "tk", "tw", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "cy", "wo", "fy", "xh", "yi, ji", "yo", "za", "zu"];
    if (dom.window.document.documentElement == null || 
        dom.window.document.documentElement.attributes.length == 0){
            errors++;
        }
    else{
        // doesn't work if there's en-us for example.
        // only works for lang='en'. same for other langs.
        let lang = dom.window.document.documentElement.getAttribute('lang');
        if (lang == null || lang.length == 0 || !allLangs.includes(lang)){
            errors++;
        }
        else{
            // console.debug(lang);
            errors = 0;
        }
    }

    if (errors === 0) return ["", errors];
    return [output, errors];

}

export default fn;
