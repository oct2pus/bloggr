I would like Pixelfed to follow in the steps of [**Mastodon**](https://github.com/tootsuite/mastodon/blob/master/LICENSE), [**Pleroma**](https://git.pleroma.social/pleroma/pleroma/blob/develop/LICENSE), [**GNUSocial**](https://github.com/foocorp/gnu-social#license), [**Peertube**](https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE) and [**Friendica**](https://github.com/friendica/friendica/blob/develop/LICENSE) in licencing Pixelfed as APGL.

# Why?

There are numerous reasons why AGPL is a better licence than the MIT licence for such a project, and let me go over my thoughts on the subject.

## Honesty

The AGPL licence would make instances of Pixelfed legally liable to publish their source code if they create any sort of modification, this promotes a culture of honesty present in the majority of the fediverse. 

### Why is Honesty Important?

One of the major reasons people originally moved to the fediverse from places like twitter is because we can't **trust** the twitter corporate to have our best interests  in mind. One of the reasons we can do this is because the majority of the code is open source, and not only that, individual instances also must publish their source code so we can all benefit mutually from each others work and see that nothing that would breach that trust.

## Consistency

Because people are forced to share implimentations, we can achieve a consistent user experience. GPL code discourages proprietary implimentations because they must be shared amongst every other developer, who can then see and impliment either a consistent protocol that works in the same way or to even directly lift code from that developer and impliment it in their own project.

## Code will head upstream

This is more a directly practical example, but you have access to other implimentations that you could merge upstream. This is more the linus argument on the utility of the GPL. 

here is a quote from an [article](https://www.cio.com/article/3112582/linux/linus-torvalds-says-gpl-was-defining-factor-in-linuxs-success.html) on CIO last year by Linus on the GPL and linux.


    Hohndel, who has been involved with the kernel for a very long time, said that during the past 25 years there have been many challenges, and one of the biggest challenges was the possibility of fragmentation. "How do we keep one single kernel?" he asked.

    "I used to be worried about fragmentation, and I used to think that it was inevitable at some point," said Torvalds. “Everyone was looking at the history of Linux and comparing it with UNIX. People would say that it’s going to fail because it's going to fragment. That's what happened before, so why even bother?"

    What made the difference was the license. "FSF [Free Software Foundation] and I don't have a loving relationship, but I love GPL v2," said Torvalds. "I really think the license has been one of the defining factors in the success of Linux because it enforced that you have to give back, which meant that the fragmentation has never been something that has been viable from a technical standpoint."

## Open isn't Free

I left the 'moral' argument for last because I'm not certain where you stand on Free vs Open Source Software. If you do not swap you would be the only permissively licenced relevant implimentation of Activitypub. This would allow easy corporate entry into our ecosphere which is largely dominated by freedom respecting implimentations. Provided they become popular, they could impliment proprietary extensions to the protocol and cause people to race to keep up if they become a major player in the ecosphere. Your implimentation could in essence, be a trojan horse for a much worse player in the ecosphere.

---

Please consider my thoughts and change the licence to AGPLv3.