self.addEventListener("install", e => {
    console.log("Service Worker installed", e)
}), self.addEventListener("activate", e => {
    console.log("Service Worker activated", e)
}), self.addEventListener("fetch", e => {});