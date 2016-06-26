package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    fmt.Println("Listening to :8080")

    go socketServer.Run()
    
    http.HandleFunc("/", webServer.Handler)
    http.HandleFunc("/ws", socketServer.Handler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}
