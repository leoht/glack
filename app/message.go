package main

import (
    "encoding/json"
    "fmt"
)

type Message struct {
    Type string
    Channel string
    From string
    To string
    Body string
}

func NewMessageFromJson(s string) *Message {
    msg := Message{}
    err := json.Unmarshal([]byte(s), &msg)

    if err == nil {
        return &msg
    } else {
        fmt.Println("Error reading json message")
        
        return nil
    }
}
