var mcontentid = '637335741737853687';

$(() => {
    setTimeout(() => {
        try {
            initPageApi(mcontentid).then(_ => { });
        } catch (ex) { alert(ex); }
    }, 1000);
});

function initPageApi(mcontentid) {
    return new Promise((resolve, reject) => {
        try {
            TheSHybridFunc("initPageApi", mcontentid, resolve);
        } catch (ex) {
            reject(ex);
            alert(ex);
        }
    });
}

function visitEndpoint(mcontentid, url) {
    try {
        TheSHybridFunc("visitEndpoint", JSON.stringify({ mcid: mcontentid, url: url }), r => resolve(r));
    } catch (ex) {
        reject(ex);
        alert(ex);
    }
}