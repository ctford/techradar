//This is the title for your window tab, and your Radar
document.title = "Pan-Africa Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1160;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"Test-driven development", "pc":{"r":30,"t":130}}, 
            {"name":"Continuous integration", "pc":{"r":50,"t":120}}, 
            {"name":"Frequent showcases", "pc":{"r":70,"t":110}},
            {"name":"Information radiators", "pc":{"r":90,"t":130}},
            {"name":"Retrospectives", "pc":{"r":50,"t":100}},
            {"name":"Infrastructure as a service", "pc":{"r":130,"t":130}},
            {"name":"In-cycle XD", "pc":{"r":160,"t":150}},
            {"name":"In-cycle testing", "pc":{"r":150,"t":170}},
            {"name":"Business intelligence", "pc":{"r":270,"t":100}},
            {"name":"Responsive design", "pc":{"r":130,"t":110}},
            {"name":"Integrating at the database", "pc":{"r":360,"t":160}} 
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            {"name":"Vagrant", "pc":{"r":70,"t":40}}, 
            {"name":"Chef", "pc":{"r":150,"t":40}}, 
            {"name":"Puppet", "pc":{"r":150,"t":45}}, 
            {"name":"Dynamic data visualisation", "pc":{"r":170,"t":10}}, 
            {"name":"Drupal", "pc":{"r":260,"t":80}}, 
            {"name":"Wordpress", "pc":{"r":260,"t":75}}, 
            {"name":"Team foundation server", "pc":{"r":360,"t":40}} 
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"USSD and SMS as UI", "pc":{"r":140,"t":185}}, 
            {"name":"Android", "pc":{"r":130,"t":230}}, 
            {"name":"J2ME", "pc":{"r":140,"t":200}}, 
            {"name":"Mobile web", "pc":{"r":110,"t":210}}, 
            {"name":"Document databases", "pc":{"r":50,"t":220}}, 
            {"name":"Relational databases", "pc":{"r":50,"t":250}}, 
            {"name":"Vumi", "pc":{"r":250,"t":250}}, 
            {"name":"Open Stack", "pc":{"r":270,"t":200}}, 
            {"name":"Singleton infrastructure", "pc":{"r":370,"t":240}}, 
            {"name":"Snowflake servers", "pc":{"r":350,"t":230}} 
        ]
    },
    { "quadrant": "Languages",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"Scratch, Alice, and Kodu", "pc":{"r":230,"t":330}},
            {"name":"Java.next", "pc":{"r":230,"t":280}},
            {"name":"Twitter bootstrap", "pc":{"r":130,"t":350}},
            {"name":"Django", "pc":{"r":40,"t":330}},
            {"name":"Symfony", "pc":{"r":250,"t":340}},
            {"name":"Rails", "pc":{"r":60,"t":280}},
            {"name":"Robotium", "pc":{"r":130,"t":320}},
            {"name":"Logic in the database", "pc":{"r":330,"t":330}},
            {"name":"Handwritten CSS", "pc":{"r":340,"t":300}}
        ]
    }
];
