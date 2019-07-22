
# Ocarina of Time Randomizer Entrance Tracker
**https://tracker.brakke.dev/**

**https://github.com/brakkum/ZOoTR-Entrance-Tracker**
## How to use

The tracker is pretty simple to use. When you first visit, you'll be prompted for the location of Link's House.
Once you add that, the area you selected will pop up, and the entrances available will be listed.
From there you can select where different entrances lead.

For locations where progress may not be possible on first visit, a border is used around the location.
Clicking on the name of the location toggles the border between red and green.
This is just an easy visual reminder to keep track of locations to revisit.

After you've explored some areas, you can use the route finder.
Click on 'Show Route Finder' in the top navbar to open it.
Just select a start location and an end, and the tracker will show the shortest routes to get there.
For locations that are a single entity, such as overworld areas or dungeons, a single route will be returned.
For locations that have multiple instances, such as grottos or some houses, the routes to all the discovered locations will be returned.

The naming of some locations in the option menus may be misleading at first.
For example in the Kokiri Forest area, the names of all the houses are explicitly labeled.
But, when selecting interiors for houses, these are all just labeled generically as 'House'.
This is done so that houses without any important progress items are not cluttering the options.

When a warp song is collected, click on its name in the bottom navbar.
This will allow the route finder to take songs into consideration, and open their areas in the tracker.

Similarly to when the tracker is first opened, there are a few prompts that can occur.
When Dampe's Grave is accessed, if the Windmill has not yet been found, the user will be prompted for where it exits to.
Also, when the user collects the Prelude of Light, if the Temple of Time has not been accessed yet, the user will also be prompted then.

To save your progress, just click 'Save' in the top navbar. This saves your progress to local storage in your browser.
However, this does mean that if you clear your browsing history your progress will be lost.
Resetting the tracker to default start is done by clicking 'Reset' in the top navbar.

## How to help

The tracker is built entirely with React/JavaScript. 

Please feel free to fork, open issues and pull requests, and submit feedback on GitHub.
