//check for Navigation Timing API support
if (window.performance) 
{
    console.info("window.performance works fine on this browser");
}
    
if (performance.navigation.type == 1) 
{
    console.info( "This page is reloaded" );
}else 
{
    console.info( "This page is not reloaded");
}

console.log("How do I fix this css problem?");