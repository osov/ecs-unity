export class Ads{
    public static instance:Ads;
    
    constructor(){
        Ads.instance = this;
    }

    static SetDelayTime(seconds:number)
    {

    }

    static IsReadyAds(seconds = 5 * 60){
        return true;
    }

    static ShowBanner(idBanner = "Banner_Android"){

    }

    static HideBanner(){

    }

    static async ShowAds(mySurfacingId = "Interstitial_Android"){
        return true;
    }

    static async ShowReward(myRewardId = "Rewarded_Android"){
        return true;
    }


}