var mcontentid = '637335741737853687';

(function() {
    setTimeout(() => {
        try {
            initPageApi(mcontentid).then(_ => { });
        } catch (ex) { console.log(ex); }
    }, 1500);
 })();

function initPageApi(mcontentid) {
    return new Promise((resolve, reject) => {
        try {
            TheSHybridFunc("initPageApi", mcontentid, resolve);
        } catch (ex) {
            reject(ex);
            console.log(ex);
        }
    });
}

function visitEndpoint(mcontentid, url) {
    try {
        TheSHybridFunc("visitEndpoint", JSON.stringify({ mcid: mcontentid, url: url }), r => resolve(r));
    } catch (ex) {
        reject(ex);
        console.log(ex);
    }
}