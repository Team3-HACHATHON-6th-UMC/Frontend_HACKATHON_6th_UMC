// ex.js
const ex = [
  {
    id: 1,

    name: "몬스테라",
    imageUrl:
      "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5AU5/image/7oHw3DMrgO9_66LHCI3MkoKjY3M.JPG",
  },
  {
    id: 2,
    name: "스파티필름",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/0bc3/26ea/9cddf1e712a0d45c9c6a64d7c75dac9e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cQjEDieznhPPg6jpRqdUws5uUWSEZ9BXOdb5glU~w-5jpcqRhtv-BKhu0jim7ixIXGlrbVX4L-5Rth1qep4KGqPL1pn7pMuke5fdSUX6-6mrKv49dNv4UDW-WiPaooLFangwstBHxe~OQGfDPGrnHrb9A9kv2n~JqvndliQ-1Y5~aJYnVtB5xxhAHVOstnADvDpn2hRJJo4cLWuZEeHjBlfviJ7TPsgI1GUswL2iar-ODHLhx5gl7AoD6jIHsfuw0ccchD3fZ~OBxr5Fd6pafogqsodHUNfnAulOrBJejW-uUBr-dRah57q4VyZB0VUQvSo5U777h07Yk8kx5x5Miw__",
  },
  {
    id: 3,
    name: "스킨답서스",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/11ac/ca41/1c5240c05519175276360fadbb975d85?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8vE2IWlgkWq0YHFt3O21rHLKNd3md2TwqxASF3n3JSiEWLqRimtSKB92gd2GIA0hTwMbpKpFOAJ9g~C117dwe0hi42C9tQV2a2a6wlqFAj-pOAy~OX8vmzAKp7kgQ5kshrWSteRNOyzds42IZNdZTxeYxkXdWW7aI~SHEqvc7VZK2W4Zm637tc4u~DY2NtsGC3A0~j2BQed5F5vGZi7SePIN45GPCZk14SKp9LXChvPWRy2HBT3HSRaAfD8XmxMq8bmZ4A9NOnszeGc7x399DIF1IzIFqco0s8rYrD554-RfRcy0BOMLMgtxXLgzTUAzJG4l6uqRMXKdXnjnALaxg__",
  },
  {
    id: 4,
    name: "스투키",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/41cd/3122/36cb5c48d8046702907885e70e759eb0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GMDy4KEXJW9iTyKCM240j506cSOhrrYjqcL~jHP83FRJECZCTIFl24S~7huG~7GtZPNwTE0c0e5OwpM39amsNiWcZuWYSBC-zYxBjmOFPrcPOKFY0KPnY0zZqruzi34mHuau0edXJEIGDh9E62JZMSu6bDk2MiyZEPNvm4-ZYsywipCNsuW8KX794z~3-JwnXT37vyHVMLV-rVD8ckYUrTxcfyPAIN-GuVZiK5u0DmHuJ6VZY58o-zgLiJi~t0kuqWM9LX51CxRfm06x-m8HAZBSRMJ1BYXVO-V4Fg8XsI1E-1gg8r1I6FUc54dFsN9G-O7nufWLYAy0LNrm8~haiw__",
  },
  {
    id: 5,
    name: "레몬밥",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ac9e/6b72/04cf4939a979a81c1c05b46dd2c31db0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRhSzGueOGdM673df2p2oO3achqzzmPiN1ol3bKp4ZFKhNyhxSMXwp3EU1xYAgRnj8xwkI7~u-3XDHM6tin1IueGiw2t7QBjmJtXTcxRI1WyyGtuSnz7e1K7tIsAXRTNIkjE81Bsandrbv~2JbSKTPVpVta5b-LrQDiPJ2to-c2Cr2tNNLM4TBAVzYEnhp8cW945fAe2qLjKW4WJ7tYrdOstjk7xMCw9hlHddF3T7TaeZywYqRGKgxdgy-BNLbhHkSsCzpCo0ifvOCnnFyTSSmqYAUhm-a70W5Lpab06MNT7QQSt~~8GnKiosCawyQeqAVU-30I878poUMZQnn1bVw__",
  },
  {
    id: 6,
    name: "다육이",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/0ca6/b952/138935fafaad7146dd5d437d0c9df2cc?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFmFXOXbfRVKKelWeGEhU7cXi3kd5gBzGmanKzsfC2TMm1YUC~sYeOIcj6p7XUltizgkZPfHrOWoixhjTluUE2S9AmjxX~gCNfOniw6UmoNHgOhaQ0J-SRrIkLfeplecHp-mQqum4Exjn0tISuqcHJfr0jsnTTPHWZgbi3qCM9mmInvwt7AsmFsaU~hBxi3VFJD7CuxkXS4rFJEePDE0tebK9GoYbMbtmekLu8-206H8lFrmVrgKkCbIaGAtpFP6dDrDmP-TP~jVcdtKLZqv6Vg7ySXcG21ELqQlv3yXmKExwF80kNWnr9t-4EJsUioAGMxmb0bzc5iT6b5pNWEb9Q__",
  },
  {
    id: 7,
    name: "아라우카리아",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9643/1240/5f47d70aa6030a0ec6388e7c3db40875?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tzsj4AU2eHQbe63V4N0EizD1coFHyYvk7jEh20mDSzhMtMFs6OkHmkFqNwwLzN~Fd5g7Wj5dhXlRivzXq30FdFBtw29gpJdyo1v4LlWnaCsSP1e0HdNj3KmdsSWeS6krLXRrw~EwjUdv~WVDB7ww5ncyzs-QqA~u9QVCPeOSpK~fFUepabim6adQTCR-5IxIIDS3M00XPvUNSMKLCZLhPLDCVFFloKhkWQDj7CXRDRi-11SHthGgvxtM0oNwhvu8aWmlsz6JTBkJQR43BGk4Wm8TU~AiUNRq7~I3sTa2hhQGUBY66ghkQZlrnsBJ2hIv12vDxwDgR5jIGF1VY3kVeA__",
  },
  {
    id: 8,
    name: "러브체인",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/b396/0839/eefc66a1a312ecf8378ed4e19c7f1d13?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z2SnKEJp0Eyi7eTUx6nKUTHVSnoec7oSrNlRJ0xxeLVOiBbvIqJ0wonmcDUFFm3o~LqY-TV0-8asaB9mJpyxlD0M8KDoAAL-HmVYnpk8IZEEx4SAn7G626QlL5Q644kZ8twlB8KQz2novg5rqSJLF05rATTuT6EKIVi8YRv3dUPV1FcCMqpivk8CnuHWv5AQJQDyCfCQmu-7FFEm3MAhtkKmXfUF~h07zCtFNo95Xx-0R4UWOGw4nNj90PRz-gpxQ3g1v1DdilxUGR~Z-11C0hYiYYrGzzrpAFjU8M95G2YaaNcQV9iysjB4CW4hkhTxtMf7YAXVYHph6uKsL~PJmg__",

  },
];

export default ex;
