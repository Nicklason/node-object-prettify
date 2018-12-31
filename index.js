'use strict';

/**
 * Sort properties in an object using a template
 * @param {Object} target Target object to prettify
 * @param {Object|Array} template Template object or array to sort the properties by
 * @return {Object} Target with sorted properties
 */
function prettify (target, template) {
    if (target === undefined || template === undefined) {
        throw new Error('Missing arguments: target, template, or both');
    } else if (typeof target !== 'object' || Array.isArray(target)) {
        throw new TypeError('Invalid argument: first argument (target) must be an object');
    } else if (typeof template !== 'object' && !Array.isArray(template)) {
        throw new TypeError('Invalid argument: second argument (template) must be either an object or array');
    }

    const prettified = {};

    for (let key in template) {
        if (!template.hasOwnProperty(key)) {
            continue;
        } else if (Array.isArray(template)) {
            key = template[key];
        }

        if (typeof key !== 'string') {
            throw new TypeError('Invalid argument: template list must only contain strings');
        }

        const value = target[key];
        if (value !== undefined) {
            prettified[key] = value;
        }
    }

    return prettified;
}

module.exports = prettify;
