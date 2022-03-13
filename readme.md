Hello everybody! it's that time of the month again, when another update breaks another feature. Yes I'm talking about cycling through tabs [again](https://www.reddit.com/r/firefox/comments/e8ckeu/how_to_cycle_tabs_with_scroll_wheel_since_71/). Just to make it clear this time by cycling I mean jump from first to last and from last to first.

Last time I just updated previous fix that was done before me. But this time it's broken for good. But don't worry! It could be done.

Couple important things first:

1. This will not work on stable Firefox or even normal beta/nightly. This will work on unbranded builds.

2. This fix would not happened without this [helpful comment](https://www.reddit.com/r/firefox/comments/e8ckeu/how_to_cycle_tabs_with_scroll_wheel_since_71/fagukya/).

3. You will need to use user [script manager](https://github.com/xiaoxiaoflood/firefox-scripts).

How to install:

1. Get one of the Firefox versions from [here](https://wiki.mozilla.org/Add-ons/Extension_Signing#Latest_Builds).

2. Install userChromeJS from link above. Just follow instructions. They have bunch of scripts there. If you only want tabs scroll just don't copy them in your chrome folder.

3. Download my script from [github](https://github.com/Vallek/firefox-cycle-scroll-tabs).

4. Place it according to userChromeJS instructions.

5. PROFIT

Disclaimer: this code was made in a cave with a box of scraps:) So if you have any ideas about optimizing it or see an error (although It seems to work) please feel free to make a pull request. Or report an issue. Or you can just comment here.

And of course always remember: this all could be broken in next update:)))

**upd1** I noticed that current unbranded version is 71. So not sure if even this will work. I'll update.

**upd2** Yep i tried 72 (witch called "beta" on wiki page) and it's not working. So I guess you could ignore it:) Or maybe it will work on "stable" unbranded. Or maybe I missed something.

**upd3** **FIXED IT** for 72 unbranded! But now you have to download different version. I name them with version numbers now. For those who is interested: it turns out the root element name is different there. It's `<window>` in 71 and `<html>` in 72.

**upd4** The [original post](https://www.reddit.com/r/firefox/comments/emdhzc/how_to_cycle_tabs_with_scroll_wheel_in_72/) with this instruction was "automatically held for moderation because your post contained a specific undisclosed word at one point" from firefox subreddit. Originally i thought it was shadowbanned but I was wrong. I'll leave it there and here anyways.

**upd5** Last tested of 97.0.1 unbranded. I don't use this anymore myself because it's too much of a hassle to update unbranded. However if you have any problems write an issue and I will check it again on current version.
