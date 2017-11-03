<?php
// accept a term (keyword)
// respond with a value

$query = $_GET['q'];
$definition = [
    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "A place that sells alcholic beverages",
    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
    "html" => "The standard markup language for creating web pages and web applications.",
    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
];

$xmldata = '<?xml version="1.0" encoding="UTF-8"?>
<definitions>
    <word>
        <head>definition</head>
        <content>A statement of the exact meaning of a word, especially in a dictionary.</content>
    </word>
    <word>
        <head>bar</head>
        <content>A place that sells alcholic beverages.</content>
    </word> 
    <word>
        <head>ajax</head>
        <content>Technique which involves the use of javascript and xml (or JSON).</content>
    </word>
    <word>
        <head>html</head>
        <content>The standard markup language for creating web pages and web applications.</content>
    </word> 
    <word>
        <head>css</head>
        <content>A style sheet language used for describing the presentation of a document written in a markup language.</content>
    </word>
    <word>
        <head>javascript</head>
        <content>A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.</content>
    </word>
     <word>
        <head>php</head>
        <content>A server-side scripting language, and a powerful tool for making dynamic and interactive websites.</content>
    </word>
</definitions>';

if($definition[$query] != ""){
    print "<h3>" . strtoupper($query) . "</h3>";
    print "<p>" . $definition[$query] . "</p>";
}
if($query == ""){
    header('Content-Type: text/xml');
    $xmlOutput = new SimpleXMLElement($xmldata);
    echo $xmlOutput ->asXML();
}else{
    print '';
}



