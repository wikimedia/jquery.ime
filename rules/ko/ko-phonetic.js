(function ($) {
    'use strict';

    document.addEventListener('keydown', function(e) {
    if (!e.shiftKey) return;

var finalForceMap = {
    g: 'ᆨ', G: 'ᆩ',
    s: 'ᆺ', S: 'ᆻ'
};

    var hangulMap = {
        'KeyB': 'ᄈ',
        'KeyJ': 'ᄍ',
        'KeyD': 'ᄄ',
        'KeyG': 'ᄁ',
        'KeyS': 'ᄊ',
        'KeyY': 'ᅤ',
        'KeyE': 'ᅨ'
    };

    var ch = hangulMap[e.code];
    if (!ch) return;

    var el = e.target;
    if (!el || (el.nodeType !== 1)) return;
    var n = el.nodeName.toLowerCase();
    if (n !== 'input' && n !== 'textarea' && !el.isContentEditable) return;

    var start = el.selectionStart || 0;
    var end = el.selectionEnd || 0;
    if (n === 'input' || n === 'textarea') {
        var val = el.value;
        el.value = val.slice(0,start) + ch + val.slice(end);
        el.setSelectionRange(start+1,start+1);
    } else {
        var sel = window.getSelection();
        var range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(ch));
        range.setStart(range.endContainer, range.endOffset);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    e.preventDefault();
}, true);

    var initialMap = {
        g:'ᄀ', G:'ᄁ', n:'ᄂ', d:'ᄃ', D:'ᄄ',
        r:'ᄅ', m:'ᄆ', b:'ᄇ', B:'ᄈ', s:'ᄉ', S:'ᄊ',
        q:'ᄋ', j:'ᄌ', J:'ᄍ', c:'ᄎ', k:'ᄏ', t:'ᄐ',
        p:'ᄑ', h:'ᄒ'
    };
    var finalMap = {
        g:'ᆨ', G:'ᆩ', n:'ᆫ', d:'ᆮ',
        r:'ᆯ', m:'ᆷ', b:'ᆸ',
        s:'ᆺ', S:'ᆻ', q:'ᆼ', j:'ᆽ', c:'ᆾ',
        k:'ᆿ', t:'ᇀ', p:'ᇁ', h:'ᇂ'
    };
    var vowelMap = {
        a:'ᅡ', y:'ᅢ', f:'ᅣ', Y:'ᅤ', v:'ᅥ', e:'ᅦ',
        z:'ᅧ', E:'ᅨ', o:'ᅩ', l:'ᅭ', u:'ᅮ', x:'ᅲ',
        w:'ᅳ', i:'ᅵ'
    };
    var compositeVowels = { 'ᅩa':'ᅪ','ᅩy':'ᅫ','ᅩi':'ᅬ','ᅮv':'ᅯ','ᅮe':'ᅰ','ᅮi':'ᅱ','ᳳi':'ᅴ' };
    var compositeFinals = { 'ᆨs':'ᆪ','ᆫj':'ᆬ','ᆫh':'ᆭ','ᆯg':'ᆰ','ᆯm':'ᆱ','ᆯb':'ᆲ','ᆯs':'ᆳ','ᆯt':'ᆴ','ᆯp':'ᆵ','ᆯh':'ᆶ','ᆸs':'ᆹ' };
    var compositeFinalDecompose = {
        'ᆪ':['ᆨ','ᄉ'],'ᆬ':['ᆫ','ᄌ'],'ᆭ':['ᆫ','ᄒ'],
        'ᆰ':['ᆯ','ᄀ'],'ᆱ':['ᆯ','ᄆ'],'ᆲ':['ᆯ','ᄇ'],
        'ᆳ':['ᆯ','ᄉ'],'ᆴ':['ᆯ','ᄐ'],'ᆵ':['ᆯ','ᄑ'],
        'ᆶ':['ᆯ','ᄒ'],'ᆹ':['ᆸ','ᄉ']
    };
    var finalToInitial = {
        'ᆨ':'ᄀ','ᆩ':'ᄁ','ᆫ':'ᄂ','ᆮ':'ᄃ','ᆯ':'ᄅ','ᆷ':'ᄆ',
        'ᆸ':'ᄇ','ᆺ':'ᄉ','ᆻ':'ᄊ','ᆼ':'ᄋ','ᆽ':'ᄌ','ᆾ':'ᄎ',
        'ᆿ':'ᄏ','ᇀ':'ᄐ','ᇁ':'ᄑ','ᇂ':'ᄒ'
    };

    function reEscape(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }


    function isPrecomposed(ch){ if(!ch) return false; var c=ch.charCodeAt(0); return c>=0xAC00 && c<=0xD7A3; }
    function decomposeSyllable(ch){
        var S = ch.charCodeAt(0)-0xAC00;
        var T = S % 28;
        var V = Math.floor((S/28) % 21);
        var L = Math.floor(S / (21*28));
        return { LIndex: L, VIndex: V, TIndex: T };
    }
    function composeSyllable(L,V,T){ return String.fromCharCode(0xAC00 + (L*21 + V)*28 + T); }
    function tIndexToFinalJamo(T){ if(T===0) return null; return String.fromCharCode('ᆨ'.charCodeAt(0) + (T-1)); }
    function finalJamoToTIndex(j){ return j.charCodeAt(0) - 'ᆨ'.charCodeAt(0) + 1; }
    function isInitialJamo(ch){ if(!ch) return false; var c=ch.charCodeAt(0); return c>=0x1100 && c<=0x1112; }
    function isMedialJamo(ch){ if(!ch) return false; var c=ch.charCodeAt(0); return c>=0x1161 && c<=0x1175; }


    window._ko2set_lastPhysical = null;
    document.addEventListener('keydown', function(e){
        try {
            var ch = e.key;
            window._ko2set_lastPhysical = { key: ch, time: Date.now(), shift: e.shiftKey };
        } catch(err){}
    }, true);

    function getInitialForKey(key) {
        if (initialMap.hasOwnProperty(key)) return initialMap[key];
        if (key === key.toLowerCase()) {
            var lk = key.toLowerCase();
            return initialMap.hasOwnProperty(lk) ? initialMap[lk] : null;
        }
        return null;
    }
    function getFinalForKey(key) {
        if (finalMap.hasOwnProperty(key)) return finalMap[key];
        if (key === key.toLowerCase()) {
            var lk = key.toLowerCase();
            return finalMap.hasOwnProperty(lk) ? finalMap[lk] : null;
        }
        return null;
    }
    function findCompositeFinal(existingFinalJamo, key) {
        var try1 = compositeFinals[ existingFinalJamo + key ];
        if (try1) return try1;
        if (key === key.toLowerCase()) {
            var lk = key.toLowerCase();
            return compositeFinals[ existingFinalJamo + lk ] || null;
        }
        return null;
    }


    var patternList = [];
    Object.keys(compositeFinals).forEach(function(k){ patternList.push([ reEscape(k), compositeFinals[k] ]); });
    Object.keys(compositeVowels).forEach(function(k){ patternList.push([ reEscape(k), compositeVowels[k] ]); });
    Object.keys(finalMap).forEach(function(key){ patternList.push([ '([ᅡ-ᅵ])' + reEscape(key), '$1' + finalMap[key] ]); });
    Object.keys(initialMap).forEach(function(key){ patternList.push([ reEscape(key), initialMap[key] ]); });
    patternList.push([ reEscape(' '), ' ' ], [ reEscape('-'), '-' ], [ reEscape("'"), "'" ]);


 var korean2set_shiftfixed = {
    id: 'ko-phonetic',
    name: 'Korean 2-Set (Shift+qwert/op fix)',
    description: 'Shift+q/w/e/r/t/o/p produces correct Hangul anywhere',
    patterns: function(input, context) {
        if (!input || input.length === 0) return { noop: true, output: input };

        var phys = window._ko2set_lastPhysical;
        var lastKey = phys ? phys.key : input.charAt(input.length - 1);

        var forceMap = { b:'ᄈ', j:'ᄍ', d:'ᄄ', g:'ᄁ', s:'ᄊ', y:'ᅤ', e:'ᅨ' };
        if (phys && phys.shift && forceMap[lastKey.toLowerCase()]) {
            lastKey = forceMap[lastKey.toLowerCase()];
        }

        var keyForVowel = null;
        if (vowelMap.hasOwnProperty(lastKey)) keyForVowel = lastKey;
        else if (lastKey === lastKey.toLowerCase() && vowelMap.hasOwnProperty(lastKey.toLowerCase())) {
            keyForVowel = lastKey.toLowerCase();
        }

        if (keyForVowel) {
            var prefix = input.slice(0, -1);
            var prev = prefix.slice(-1);

            if (isPrecomposed(prev)) {
                var dec = decomposeSyllable(prev);
                if (dec.TIndex > 0) {
                    var finalJ = tIndexToFinalJamo(dec.TIndex);
                    if (compositeFinalDecompose.hasOwnProperty(finalJ)) {
                        var parts = compositeFinalDecompose[finalJ];
                        var newPrev = composeSyllable(dec.LIndex, dec.VIndex, finalJ ? dec.TIndex : 0);
                        var Lnext = parts[1].charCodeAt(0) - 'ᄀ'.charCodeAt(0);
                        var Vnext = vowelMap[keyForVowel].charCodeAt(0) - 'ᅡ'.charCodeAt(0);
                        var newNext = composeSyllable(Lnext, Vnext, 0);
                        return { noop:false, output:prefix.slice(0,-1)+newPrev+newNext };
                    } else {
                        var prevNoFinal = composeSyllable(dec.LIndex, dec.VIndex, 0);
                        var initialForNext = finalToInitial[tIndexToFinalJamo(dec.TIndex)];
                        if (initialForNext) {
                            var Lnext = initialForNext.charCodeAt(0) - 'ᄀ'.charCodeAt(0);
                            var Vnext = vowelMap[keyForVowel].charCodeAt(0) - 'ᅡ'.charCodeAt(0);
                            var nextSyll = composeSyllable(Lnext, Vnext, 0);
                            return { noop:false, output:prefix.slice(0,-1)+prevNoFinal+nextSyll };
                        }
                    }
                }
            }

            if (isInitialJamo(prefix.slice(-1))) {
                var L = prefix.slice(-1).charCodeAt(0) - 'ᄀ'.charCodeAt(0);
                var V = vowelMap[keyForVowel].charCodeAt(0) - 'ᅡ'.charCodeAt(0);
                return { noop:false, output:prefix.slice(0,-1)+composeSyllable(L,V,0) };
            }

            if (isMedialJamo(prefix.slice(-1))) {
                var prevMed = prefix.slice(-1);
                var composite = compositeVowels[prevMed + keyForVowel];
                if (composite) return { noop:false, output:prefix.slice(-1)+composite };
            }

            return { noop:false, output:prefix+vowelMap[keyForVowel] };
        }

        if (getInitialForKey(lastKey)) {
            var prefixC = input.slice(0,-1);
            var prevChar = prefixC.slice(-1);

            if (isPrecomposed(prevChar)) {
                var dec = decomposeSyllable(prevChar);
                var finalForKey = getFinalForKey(lastKey) || finalForceMap[lastKey];

                if (dec.TIndex === 0 && finalForKey) {
                    var newT = finalJamoToTIndex(finalForKey);
                    return { noop:false, output:prefixC.slice(0,-1)+composeSyllable(dec.LIndex, dec.VIndex, newT) };
                }

                if (dec.TIndex > 0) {
                    var existingFinal = tIndexToFinalJamo(dec.TIndex);
                    var composite = findCompositeFinal(existingFinal, lastKey);
                    if (composite) {
                        var newT = finalJamoToTIndex(composite);
                        return { noop:false, output:prefixC.slice(0,-1)+composeSyllable(dec.LIndex, dec.VIndex, newT) };
                    }
                }

                return { noop:false, output:prefixC+getInitialForKey(lastKey) };
            }

            var prev2 = prefixC.slice(-2);
            if (prev2.length===2 && isInitialJamo(prev2.charAt(0)) && isMedialJamo(prev2.charAt(1))) {
                var finalForKey2 = getFinalForKey(lastKey);
                if (finalForKey2) {
                    var Lidx = prev2.charAt(0).charCodeAt(0) - 'ᄀ'.charCodeAt(0);
                    var Vidx = prev2.charAt(1).charCodeAt(0) - 'ᅡ'.charCodeAt(0);
                    var newT = finalJamoToTIndex(finalForKey2);
                    return { noop:false, output:prefixC.slice(0,-2)+composeSyllable(Lidx,Vidx,newT) };
                }
            }

            return { noop:false, output:prefixC+getInitialForKey(lastKey) };
        }

        for (var i=0;i<patternList.length;i++){
            var rule = patternList[i];
            var rx = new RegExp(rule[0]+'$');
            if (rx.test(input)) {
                var out = input.replace(rx,rule[1]);
                var jamoRegex = /([ᄀ-ᄒ])([ᅡ-ᅵ])([ᆨ-ᇂ])?([ᄀ-ᄒ]|[\- ']|$)?(.*)$/;
                if (jamoRegex.test(out)) return { noop:false, output:out.replace(jamoRegex, combineJamo) };
                return { noop:false, output:out };
            }
        }

        return { noop:true, output:input };
    }
};


    function combineJamo(substring, initial, vowel, final, nextInitOrDisambig, rest) {
        var L = initial.charCodeAt(0) - 'ᄀ'.charCodeAt(0);
        var V = vowel.charCodeAt(0) - 'ᅡ'.charCodeAt(0);
        var T = final ? (final.charCodeAt(0) - 'ᆨ'.charCodeAt(0) + 1) : 0;
        var composed = String.fromCharCode(0xAC00 + (L*21 + V)*28 + T);
        if (nextInitOrDisambig && (/^[\- ']+$/).test(nextInitOrDisambig)) return composed + (rest || '');
        return composed + (nextInitOrDisambig || '') + (rest || '');
    }

    if ($ && $.ime && typeof $.ime.register === 'function') {
        $.ime.register(korean2set_shiftfixed);
    } else {
        if (typeof window !== 'undefined') window._ko2set_shiftfixed = korean2set_shiftfixed;
    }

    var isComposing = false;
    document.addEventListener('compositionstart', function(){ isComposing = true; }, true);
    document.addEventListener('compositionend', function(){ isComposing = false; }, true);

    function isEditableElement(el) {
        if (!el || el.nodeType !== 1) return false;
        var n = el.nodeName.toLowerCase();
        if (n === 'input' || n === 'textarea') return !el.readOnly && !el.disabled;
        return el.isContentEditable;
    }
    function getInputText(el) { return el ? (el.value || el.textContent || '') : ''; }
    function setInputText(el, text){ if(!el) return; var n=el.nodeName.toLowerCase(); if(n==='input'||n==='textarea') el.value=text; else el.textContent=text; }

    function getCaretPosInput(el){
        var n = el.nodeName.toLowerCase();
        if(n==='input'||n==='textarea') return {start:el.selectionStart,end:el.selectionEnd};
        var sel = window.getSelection(); if(!sel||sel.rangeCount===0) return {start:0,end:0};
        var range = sel.getRangeAt(0);
        var pre = document.createRange();
        pre.selectNodeContents(el); pre.setEnd(range.startContainer,range.startOffset);
        var start = pre.toString().length;
        var post = document.createRange();
        post.selectNodeContents(el); post.setEnd(range.endContainer,range.endOffset);
        var end = post.toString().length;
        return {start:start,end:end};
    }

    function setCaretPosInput(el,pos){
        var n=el.nodeName.toLowerCase();
        if(n==='input'||n==='textarea'){ el.setSelectionRange(pos,pos); el.focus(); return; }
        var walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
        var node; var remaining=pos;
        while(node=walker.nextNode()){
            var len=node.textContent.length;
            if(remaining<=len){
                var range=document.createRange();
                range.setStart(node,remaining); range.collapse(true);
                var sel=window.getSelection(); sel.removeAllRanges(); sel.addRange(range); return;
            }
            remaining-=len;
        }
        var r=document.createRange(); r.selectNodeContents(el); r.collapse(false);
        var s=window.getSelection(); s.removeAllRanges(); s.addRange(r);
    }

    function charAt(el,idx){
        if(!el) return '';
        var n=el.nodeName.toLowerCase();
        if(n==='input'||n==='textarea') return el.value.charAt(idx);
        var walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
        var node; var i=idx;
        while(node=walker.nextNode()){ if(i<node.textContent.length) return node.textContent.charAt(i); i-=node.textContent.length; }
        return '';
    }

    function replaceCharAt(el,idx,newChar){
        if(!el) return;
        var n=el.nodeName.toLowerCase();
        if(n==='input'||n==='textarea'){ var v=el.value; el.value=v.slice(0,idx)+newChar+v.slice(idx+1); return; }
        var walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
        var node; var i=idx;
        while(node=walker.nextNode()){ if(i<node.textContent.length){ node.textContent=node.textContent.slice(0,i)+newChar+node.textContent.slice(i+1); return; } i-=node.textContent.length; }
    }

    document.addEventListener('keydown', function(e){
        if(isComposing) return;
        if(e.key!=='Backspace') return;
        var el=e.target;
        if(!isEditableElement(el)) return;
        var caret=getCaretPosInput(el); var pos=caret.start;
        if(pos===0) return;
        var charBefore=charAt(el,pos-1);
        if(!isPrecomposed(charBefore)) return;
        var dec=decomposeSyllable(charBefore);
        if(dec.TIndex>0){
            var finalJ=tIndexToFinalJamo(dec.TIndex);
            if(compositeFinalDecompose.hasOwnProperty(finalJ)){
                var parts=compositeFinalDecompose[finalJ];
                var newFinal=parts[0];
                var newT=finalJamoToTIndex(newFinal);
                replaceCharAt(el,pos-1,composeSyllable(dec.LIndex,dec.VIndex,newT));
                setCaretPosInput(el,pos); e.preventDefault();
            } else {
                replaceCharAt(el,pos-1,composeSyllable(dec.LIndex,dec.VIndex,0));
                setCaretPosInput(el,pos); e.preventDefault();
            }
        }
    }, true);

}(jQuery));  