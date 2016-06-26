package main

import (
    "fmt"
    // "os"
    "net/http"
    "io"
    "io/ioutil"
    "path/filepath"
)

type WebServer struct {
}

var webServer = WebServer{}

func (s* WebServer) Log(a string) {
    fmt.Println("WEB: " + a)
}

func (s* WebServer) Handler(w http.ResponseWriter, r *http.Request) {
    // s.Log(" -> Request: " + r.URL.Path)
    
    if r.URL.Path == "/" {
        data, _ := ioutil.ReadFile("web/index.html")
        io.WriteString(w, string(data))
    } else if data, _ := ioutil.ReadFile("web" + r.URL.Path) ; data != nil {
        s.Log("-> Serving static file: " + r.URL.Path)
        w.Header().Set("Content-Type", http.DetectContentType(data))
        
        if filepath.Ext(r.URL.Path) == ".css" {
            w.Header().Set("Content-Type", "text/css")
        }
        
        w.Write(data)
    } else {
        http.NotFound(w, r)
    }
}
