
/**
 * author: LOC Nguyen
 * Convert forms to JSON LIKE A BOSS
 */
$.fn.serializeObject = function () {

    //update ckeditor
    for (instance in CKEDITOR.instances)
        CKEDITOR.instances[instance].updateElement();

    var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key": /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push": /^$/,
                "fixed": /^\d+$/,
                "named": /^[a-zA-Z0-9_]+$/
            };


    // Find disabled inputs, and remove the "disabled" attribute
    var disabled = self.find(':input:disabled').removeAttr('disabled');

    this.build = function (base, key, value) {
        base[key] = value;
        return base;
    };

    this.push_counter = function (key) {
        if (push_counters[key] === undefined) {
            push_counters[key] = 0;
        }
        return push_counters[key]++;
    };

    $.each($(this).serializeArray(), function () {

        // skip invalid keys
        if (!patterns.validate.test(this.name)) {
            return;
        }
        var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                type =  $("[name=\""+this.name+"\"]").attr("data-type");
                reverse_key = this.name;

        while ((k = keys.pop()) !== undefined) {
            
            if(type != undefined && type != null && type != "" && type == "encode" && merge != ""){
                merge = encodeURIComponent(merge);
            }
            
            if(type != undefined && type != null && type != "" && type == "date" && merge != ""){
                var date = merge.split("/");
                merge = date[2] + "-" + date[1] + "-" + date[0];
            }
            // adjust reverse_key
            reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

            // push
            if (k.match(patterns.push)) {
                merge = self.build([], self.push_counter(reverse_key), merge);
            }

            // fixed
            else if (k.match(patterns.fixed)) {
                merge = self.build([], k, merge);
            }

            // named
            else if (k.match(patterns.named)) {
                merge = self.build({}, k, merge);
            }
        }

        json = $.extend(true, json, merge);
    });

    // re-disabled the set of inputs that you previously enabled
    disabled.attr('disabled', 'disabled');
    
    return json;
};