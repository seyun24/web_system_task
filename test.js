
import { Did } from "./common/device/did.js";
import { Kds } from "./common/device/kds.js";
import { Printer } from "./common/device/printer.js";
import { NaverPay, NaverPayAdapter, TossPay, TossPayAdapter } from "./common/payment/index.js";
import { McDonaldsKiosk } from "./McDonald/McDonaldKiosk.js";
import { ExtraCheese, ExtraSauce } from "./McDonald/menuDecorator.js";
import { McLanchStrategy, McMorningSaleStrategy, McStafSaleStrategy } from "./McDonald/saleStrategy.js";
import { ExtraHoney, ExtraShot } from "./Starbucks/menuDecorator.js";
import { StarbucksBreadSaleStrategy, StarbucksSpcialDayStrategy } from "./Starbucks/saleStrategy.js";
import { StarbucksKiosk } from "./Starbucks/StarbucksKiosk.js";
import { SubwayHalfStrategy, SubwaySeasonSaleStrategy } from "./Subway/saleStrategy.js";
import { SubwayKiosk } from "./Subway/subwayKiosk.js";

// mcDonaldTest1();
// mcDonaldTest2();

// subwayTest1();
// starbucksTest2();

starbucksTest1();
// starbucksTest2();

function mcDonaldTest1() {
    console.log("맥도날드 테스트 케이스 1");
    const kiosk = 
        new McDonaldsKiosk( //맥도날드 키오스크 테마 선택
            new McLanchStrategy(), //판매 전략
            0, //품목 선택
            [ExtraCheese, ExtraSauce], //추가옵션 선택
            new NaverPayAdapter(new NaverPay()) //결제 방식 선택
        );

    //키오스크 주변기기 연동    
    kiosk.observer.add(new Kds());
    kiosk.observer.add(new Printer());
    kiosk.observer.add(new Did());

    kiosk.start();
}


function mcDonaldTest2() {
    console.log("맥도날드 테스트 케이스 2");
    const kiosk = 
        new McDonaldsKiosk(
            new McStafSaleStrategy(),
            1,
            [ExtraSauce],
            new TossPayAdapter(new TossPay())
        );
        
    kiosk.observer.add(new Kds());
    kiosk.observer.add(new Printer());
    kiosk.observer.add(new Did());

    kiosk.start();
}


function subwayTest1() {
    console.log("써브웨이 테스트 케이스 1");
    const kiosk = 
        new SubwayKiosk(
            new SubwayHalfStrategy(),
            0,
            [ExtraCheese, ExtraSauce],
            new NaverPayAdapter(new NaverPay())
        );

    kiosk.observer.add(new Kds());
    kiosk.observer.add(new Printer());
    kiosk.observer.add(new Did());

    kiosk.start();
}


function subwayTest2() {
    console.log("써브웨이 테스트 케이스 2");
    const kiosk = 
        new SubwayKiosk(
            new SubwaySeasonSaleStrategy(),
            1,
            [ExtraSauce],
            new TossPayAdapter(new TossPay())
        );
        
    kiosk.observer.add(new Kds());
    kiosk.observer.add(new Printer());
    kiosk.observer.add(new Did());

    kiosk.start();
}

function starbucksTest1() {
    console.log("스타벅스 테스트 케이스 1");
    const kiosk = 
        new StarbucksKiosk(
            new StarbucksSpcialDayStrategy(),
            0,
            [ExtraShot, ExtraShot],
            new NaverPayAdapter(new NaverPay())
        );

    kiosk.observer.add(new Kds());
    kiosk.observer.add(new Printer());
    kiosk.observer.add(new Did());

    kiosk.start();
}


function starbucksTest2() {
    console.log("스타벅스 테스트 케이스 2");
    const kiosk = 
        new StarbucksKiosk(
            new StarbucksBreadSaleStrategy(),
            1,
            [ExtraHoney],
            new TossPayAdapter(new TossPay())
        );
        
    kiosk.observer.add(new Kds());
    kiosk.observer.add(new Printer());
    kiosk.observer.add(new Did());

    kiosk.start();
}