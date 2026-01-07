import svgPaths from "./svg-eapub42m26";
import imgLogoPrincipal from "figma:asset/2cd43f2cf06fa897c24731484233856b8ef518a7.png";
import imgPortadaRebel from "figma:asset/b91c8a16c702c27e8ec6850e7f1aec116ddb7018.png";
import imgPortadaRebel1 from "figma:asset/3a280275f02c918ed47831e7f4ce14e00f089e31.png";
import imgPortadaRebel2 from "figma:asset/3594e76b4244e3900566e76fdf9cc2c76e392ee5.png";
import imgPortadaRebel3 from "figma:asset/c98f99a78aa414d733b822c006d9082ec1831142.png";
import imgCapturaDePantalla20220929ALaS16401 from "figma:asset/76d42d8eea42c7f4485422e4c0d945f66cc21fdd.png";
import imgDetalle from "figma:asset/10a50ab105a37d8fd5740823d00dc52bdbe271de.png";

function LogoPrincipal() {
  return (
    <div className="absolute h-[169px] left-[44px] top-[249px] w-[276px]" data-name="LogoPrincipal">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[53.85%_80.07%_36.09%_8.7%] leading-[normal] not-italic text-[#eff6b2] text-[15px] text-nowrap">APP</p>
      <div className="absolute inset-[75.15%_18.12%_24.85%_16.67%]">
        <div className="absolute inset-[-5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 5">
            <line id="Line 23" stroke="var(--stroke-0, #EFF6B2)" strokeWidth="5" x2="180" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[81.66%_24.64%_18.34%_24.64%]">
        <div className="absolute inset-[-5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 5">
            <line id="Line 25" stroke="var(--stroke-0, #EFF6B2)" strokeWidth="5" x2="140" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[87.57%_31.88%_12.43%_31.88%]">
        <div className="absolute inset-[-5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 5">
            <line id="Line 27" stroke="var(--stroke-0, #EFF6B2)" strokeWidth="5" x2="100" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[92.9%_42.75%_7.1%_42.75%]">
        <div className="absolute inset-[-5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 5">
            <line id="Line 29" stroke="var(--stroke-0, #EFF6B2)" strokeWidth="5" x2="40" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[15.98%_31.88%_84.02%_31.88%]">
        <div className="absolute inset-[-5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 5">
            <line id="Line 27" stroke="var(--stroke-0, #EFF6B2)" strokeWidth="5" x2="100" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.06%_42.75%_89.94%_42.75%]">
        <div className="absolute inset-[-5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 5">
            <line id="Line 29" stroke="var(--stroke-0, #EFF6B2)" strokeWidth="5" x2="40" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[21.89%_24.64%_78.11%_24.64%]">
        <div className="absolute inset-[-5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 5">
            <line id="Line 25" stroke="var(--stroke-0, #EFF6B2)" strokeWidth="5" x2="140" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.81%_18.12%_72.19%_16.67%]">
        <div className="absolute inset-[-5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 5">
            <line id="Line 23" stroke="var(--stroke-0, #EFF6B2)" strokeWidth="5" x2="180" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BienvenidaElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-0 overflow-clip top-0 w-[360px]" data-name="Bienvenida_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[364px]" />
      <LogoPrincipal />
    </div>
  );
}

function MenuHamburger() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TarjetaUno() {
  return (
    <div className="absolute h-[270px] left-[11px] top-[143px] w-[160px]" data-name="TarjetaUno">
      <div className="absolute bg-[#c4c4a9] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.33%_10.63%_90.37%_9.38%] leading-[16.888px] not-italic text-[20px] text-black text-center text-nowrap">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] inset-[72.22%_1.88%_13.33%_1.25%] leading-[12px] not-italic text-[11px] text-black text-center">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute inset-[12.96%_0_29.63%_0]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
    </div>
  );
}

function Tarjetados() {
  return (
    <div className="absolute h-[270px] left-[calc(40%+45px)] top-[143px] w-[160px]" data-name="Tarjetados">
      <div className="absolute bg-[#c4c4a9] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.33%_2.5%_90.37%_1.25%] leading-[16.888px] not-italic text-[18px] text-black text-center text-nowrap">Formato Negativo</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[72.22%_1.88%_13.33%_1.25%] leading-[12px] not-italic text-[11px] text-black text-center">Distorted vocals, melodics synths and powerful beats</p>
      <div className="absolute inset-[12.96%_0_29.63%_0]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel1} />
      </div>
    </div>
  );
}

function TarjetaUnoTres() {
  return (
    <div className="absolute h-[270px] left-[10px] top-[449px] w-[160px]" data-name="TarjetaUnoTres">
      <div className="absolute bg-[#c4c4a9] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.33%_12.5%_90.37%_11.25%] leading-[16.888px] not-italic text-[20px] text-black text-center text-nowrap">Christ Under</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[72.22%_1.88%_13.33%_1.25%] leading-[12px] not-italic text-[11px] text-black text-center">{`The first single from the upcoming debut album "Encrypted Minds"`}</p>
      <div className="absolute inset-[12.96%_0_29.63%_0]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel2} />
      </div>
    </div>
  );
}

function TarjetaCuatro() {
  return (
    <div className="absolute h-[270px] left-[calc(40%+46px)] top-[449px] w-[160px]" data-name="TarjetaCuatro">
      <div className="absolute bg-[#c4c4a9] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.33%_23.13%_90.37%_21.88%] leading-[16.888px] not-italic text-[20px] text-black text-center text-nowrap">Brigadier</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[72.22%_1.88%_13.33%_1.25%] leading-[12px] not-italic text-[11px] text-black text-center">With a war theme and a powerful sound full of beats and melodies</p>
      <div className="absolute inset-[12.96%_0_29.63%_0]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel3} />
      </div>
    </div>
  );
}

function BotonComprar1() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprar1">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[23.12%_31.43%_23.13%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[86px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">COMPRAR</p>
        </div>
      </div>
    </div>
  );
}

function BotonComprar2() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprar2">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[23.12%_31.43%_23.13%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[86px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">COMPRAR</p>
        </div>
      </div>
    </div>
  );
}

function BotonComprar3() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprar3">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[23.12%_31.43%_23.13%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[86px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">COMPRAR</p>
        </div>
      </div>
    </div>
  );
}

function BotonComprar4() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprar4">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[23.12%_31.43%_23.13%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[86px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">COMPRAR</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[18.67%_18.13%_18.4%_18.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9314 22.6547">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p233a4300} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2c366d00} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FadLogoAudacity() {
  return (
    <div className="absolute left-[calc(40%+18px)] overflow-clip size-[36px] top-[40px]" data-name="fad:logo-audacity">
      <Group />
    </div>
  );
}

function DiscosElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[410px] overflow-clip top-0 w-[360px]" data-name="Discos_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[calc(20%+108.5px)] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Discos</p>
      <TarjetaUno />
      <Tarjetados />
      <TarjetaUnoTres />
      <TarjetaCuatro />
      <div className="absolute flex h-[35px] items-center justify-center left-[11px] top-[379px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprar1 />
        </div>
      </div>
      <div className="absolute flex h-[35px] items-center justify-center left-[calc(40%+45px)] top-[380px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprar2 />
        </div>
      </div>
      <div className="absolute flex h-[35px] items-center justify-center left-[10px] top-[684px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprar3 />
        </div>
      </div>
      <div className="absolute flex h-[35px] items-center justify-center left-[calc(40%+46px)] top-[684px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprar4 />
        </div>
      </div>
      <FadLogoAudacity />
    </div>
  );
}

function MenuHamburger1() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[25.09%] left-[9.77%] right-[9.84%] top-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.9413 17.9672">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3d8cd800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p41b1700} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FadSquareswitchOff() {
  return (
    <div className="absolute left-[calc(20%+40px)] overflow-clip size-[36px] top-[378px]" data-name="fad:squareswitch-off">
      <Group1 />
    </div>
  );
}

function TarjetaUno1() {
  return (
    <div className="absolute contents left-[calc(20%+28px)] top-[143px]" data-name="TarjetaUno">
      <div className="absolute bg-[rgba(229,229,215,0.4)] h-[270px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[143px] w-[160px]" data-name="FondoTarjeta" />
      <div className="absolute bg-black h-[35px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[378px] w-[160px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.888px] left-[calc(20%+107px)] not-italic text-[20px] text-black text-center text-nowrap top-[152px] translate-x-[-50%]">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] h-[39px] leading-[12px] left-[calc(20%+107.5px)] not-italic text-[11px] text-black text-center top-[338px] translate-x-[-50%] w-[155px]">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines) $ 16 USD</p>
      </div>
      <div className="absolute h-[155px] left-[calc(20%+28px)] top-[178px] w-[160px]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[12px] left-[calc(40%+54.5px)] not-italic text-[11px] text-center text-nowrap text-white top-[390px] tracking-[2.64px] translate-x-[-50%]">COMPRAR</p>
      <FadSquareswitchOff />
    </div>
  );
}

function FadMicrophone() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[40px]" data-name="fad:microphone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:microphone">
          <path clipRule="evenodd" d={svgPaths.p17399c80} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TarjetaUno2() {
  return (
    <div className="absolute h-[270px] left-[calc(20%+28px)] top-[143px] w-[160px]" data-name="TarjetaUno">
      <div className="absolute bg-[#c4c4a9] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.33%_10.63%_90.37%_9.38%] leading-[16.888px] not-italic text-[20px] text-black text-center text-nowrap">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] inset-[72.22%_1.88%_13.33%_1.25%] leading-[12px] not-italic text-[11px] text-black text-center">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines) $ 16 USD</p>
      </div>
      <div className="absolute inset-[12.96%_0_29.63%_0]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
    </div>
  );
}

function BotonComprar() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[23.12%_31.43%_23.13%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[86px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">COMPRAR</p>
        </div>
      </div>
    </div>
  );
}

function FlechaIzquierda() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArtistaElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[810px] overflow-clip top-0 w-[360px]" data-name="Artista_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger1 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[calc(20%+108px)] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Artista</p>
      <TarjetaUno1 />
      <div className="absolute bg-[#c4c4a9] h-[121px] left-[33px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[447px] w-[295px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[105px] leading-[12px] left-[44px] not-italic text-[11px] text-black text-justify top-[455px] w-[273px]">{`Rebel Empire was born in 2010 in Mexico City with a sound between electro body music and punk old school. He has performed at various festivals, including the "EBM United" in Mexico, being part of the main cartel. Among the most listened to his repertoire songs how "Control Body" with a large number of views on YouTube. He has remixed projects like: Red Industrie, Firemensch and Grosstracktor.`}</p>
      <div className="absolute h-[130px] left-[36px] top-[594px] w-[287px]" data-name="Captura de Pantalla 2022-09-29 a la(s) 16.40 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20220929ALaS16401} />
      </div>
      <div className="absolute bg-[rgba(94,78,178,0.1)] h-[130px] left-[35px] top-[594px] w-[288px]" />
      <FadMicrophone />
      <TarjetaUno2 />
      <div className="absolute flex h-[35px] items-center justify-center left-[calc(20%+28px)] top-[378px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprar />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda />
        </div>
      </div>
    </div>
  );
}

function MenuHamburger2() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MicrofonoIcon() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="MicrofonoIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:microphone">
          <path clipRule="evenodd" d={svgPaths.p17399c80} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TarjetaUno3() {
  return (
    <div className="absolute h-[270px] left-[calc(20%+28px)] top-[143px] w-[160px]" data-name="TarjetaUno">
      <div className="absolute bg-[#c4c4a9] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.33%_10.63%_90.37%_9.38%] leading-[16.888px] not-italic text-[20px] text-black text-center text-nowrap">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] inset-[72.22%_1.88%_13.33%_1.25%] leading-[12px] not-italic text-[11px] text-black text-center">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute inset-[12.96%_0_29.63%_0]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
    </div>
  );
}

function BotonComprarApretado() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprarApretado">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[23.12%_31.43%_23.13%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[86px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">COMPRAR</p>
        </div>
      </div>
    </div>
  );
}

function BotonComprarFisico() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprarFisico">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#eff6b2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[15.62%_31.43%_15%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[111px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-black text-center text-nowrap tracking-[3.12px]">Disco Físico</p>
        </div>
      </div>
    </div>
  );
}

function BotonComprarDigital() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprarDigital">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#eff6b2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[31.87%_31.43%_31.25%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[59px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-black text-center text-nowrap tracking-[3.12px]">Digital</p>
        </div>
      </div>
    </div>
  );
}

function FlechaIzquierda1() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArtistaElectrosound1() {
  return (
    <div className="absolute bg-white h-[800px] left-[810px] overflow-clip top-[898px] w-[360px]" data-name="Artista_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger2 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[calc(20%+108px)] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Artista</p>
      <div className="absolute bg-[#c4c4a9] h-[121px] left-[33px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[447px] w-[295px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[105px] leading-[12px] left-[44px] not-italic text-[11px] text-black text-justify top-[455px] w-[273px]">{`Rebel Empire was born in 2010 in Mexico City with a sound between electro body music and punk old school. He has performed at various festivals, including the "EBM United" in Mexico, being part of the main cartel. Among the most listened to his repertoire songs how "Control Body" with a large number of views on YouTube. He has remixed projects like: Red Industrie, Firemensch and Grosstracktor.`}</p>
      <div className="absolute h-[130px] left-[36px] top-[594px] w-[287px]" data-name="Captura de Pantalla 2022-09-29 a la(s) 16.40 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20220929ALaS16401} />
      </div>
      <div className="absolute bg-[rgba(94,78,178,0.1)] h-[130px] left-[35px] top-[594px] w-[288px]" />
      <MicrofonoIcon />
      <TarjetaUno3 />
      <div className="absolute flex h-[35px] items-center justify-center left-[calc(20%+28px)] top-[378px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprarApretado />
        </div>
      </div>
      <div className="absolute flex h-[35px] items-center justify-center left-[calc(20%+28px)] top-[413px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprarFisico />
        </div>
      </div>
      <div className="absolute flex h-[35px] items-center justify-center left-[calc(20%+28px)] top-[450px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprarDigital />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda1 />
        </div>
      </div>
    </div>
  );
}

function MenuHamburger3() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TarjetaUno4() {
  return (
    <div className="absolute contents left-[calc(20%+28px)] top-[143px]" data-name="TarjetaUno">
      <div className="absolute bg-[rgba(229,229,215,0.2)] h-[270px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[143px] w-[160px]" data-name="FondoTarjeta" />
      <div className="absolute bg-black h-[35px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[378px] w-[160px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.888px] left-[calc(20%+107px)] not-italic text-[20px] text-black text-center text-nowrap top-[152px] translate-x-[-50%]">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] h-[39px] leading-[12px] left-[calc(20%+107.5px)] not-italic text-[11px] text-black text-center top-[338px] translate-x-[-50%] w-[155px]">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute h-[155px] left-[calc(20%+28px)] top-[178px] w-[160px]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[12px] left-[calc(20%+108px)] not-italic text-[11px] text-center text-nowrap text-white top-[390px] tracking-[2.64px] translate-x-[-50%]">Detalle de compra</p>
    </div>
  );
}

function FadLock() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="fad:lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:lock">
          <path clipRule="evenodd" d={svgPaths.p16ec6f00} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FlechaIzquierda2() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DetalleElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[1610px] overflow-clip top-0 w-[360px]" data-name="Detalle_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger3 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[calc(20%+108.5px)] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Detalle</p>
      <TarjetaUno4 />
      <div className="absolute bg-[rgba(229,229,215,0.2)] h-[121px] left-[33px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[447px] w-[295px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[105px] leading-[12px] left-[44px] not-italic text-[11px] text-black text-justify top-[455px] w-[273px]">{`Rebel Empire was born in 2010 in Mexico City with a sound between electro body music and punk old school. He has performed at various festivals, including the "EBM United" in Mexico, being part of the main cartel. Among the most listened to his repertoire songs how "Control Body" with a large number of views on YouTube. He has remixed projects like: Red Industrie, Firemensch and Grosstracktor.`}</p>
      <div className="absolute h-[130px] left-[36px] top-[594px] w-[287px]" data-name="Captura de Pantalla 2022-09-29 a la(s) 16.40 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20220929ALaS16401} />
      </div>
      <div className="absolute bg-[rgba(94,78,178,0.1)] h-[130px] left-[35px] top-[594px] w-[288px]" />
      <div className="absolute bg-black h-[729px] left-0 opacity-50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[31px] w-[360px]" data-name="menu" />
      <div className="absolute bg-[#e5e5d7] h-[338px] left-[calc(20%-3px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[222px] w-[219px]" data-name="detallefondo" />
      <div className="absolute h-[298px] left-[calc(20%+12px)] top-[239px] w-[188px]" data-name="detalle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.42%] left-[-7.94%] max-w-none top-[-5.7%] w-[116.95%]" src={imgDetalle} />
        </div>
      </div>
      <div className="absolute bg-[#5e4eb2] h-[51px] left-[calc(20%+12px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[486px] w-[188px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[12px] left-[calc(20%+106px)] not-italic text-[16px] text-center text-nowrap text-white top-[506px] tracking-[3.84px] translate-x-[-50%]">Sí, Comprar</p>
      <FadLock />
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda2 />
        </div>
      </div>
    </div>
  );
}

function MenuHamburger4() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TarjetaUno5() {
  return (
    <div className="absolute contents left-[calc(20%+28px)] top-[143px]" data-name="TarjetaUno">
      <div className="absolute bg-[rgba(229,229,215,0.2)] h-[270px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[143px] w-[160px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.888px] left-[calc(20%+107px)] not-italic text-[20px] text-black text-center text-nowrap top-[152px] translate-x-[-50%]">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] h-[39px] leading-[12px] left-[calc(20%+107.5px)] not-italic text-[11px] text-black text-center top-[338px] translate-x-[-50%] w-[155px]">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute h-[155px] left-[calc(20%+28px)] top-[178px] w-[160px]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
    </div>
  );
}

function IconoWave() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="iconoWave">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="iconoWave">
          <path clipRule="evenodd" d={svgPaths.p1d2c840} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TarjetaUno6() {
  return (
    <div className="absolute h-[270px] left-[calc(20%+28px)] top-[143px] w-[160px]" data-name="TarjetaUno">
      <div className="absolute bg-[#c4c4a9] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.33%_10.63%_90.37%_9.38%] leading-[16.888px] not-italic text-[20px] text-black text-center text-nowrap">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] inset-[72.22%_1.88%_13.33%_1.25%] leading-[12px] not-italic text-[11px] text-black text-center">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute inset-[12.96%_0_29.63%_0]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
    </div>
  );
}

function BotonComprar5() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[22.5%_31.43%_21.88%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[89px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Descargar</p>
        </div>
      </div>
    </div>
  );
}

function FlechaIzquierda3() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CompradoElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[2010px] overflow-clip top-0 w-[360px]" data-name="Comprado_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger4 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[180px] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Comprado</p>
      <TarjetaUno5 />
      <div className="absolute bg-[#c4c4a9] h-[121px] left-[33px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[447px] w-[295px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[105px] leading-[12px] left-[44px] not-italic text-[11px] text-black text-justify top-[455px] w-[273px]">{`Rebel Empire was born in 2010 in Mexico City with a sound between electro body music and punk old school. He has performed at various festivals, including the "EBM United" in Mexico, being part of the main cartel. Among the most listened to his repertoire songs how "Control Body" with a large number of views on YouTube. He has remixed projects like: Red Industrie, Firemensch and Grosstracktor.`}</p>
      <div className="absolute h-[130px] left-[36px] top-[594px] w-[287px]" data-name="Captura de Pantalla 2022-09-29 a la(s) 16.40 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20220929ALaS16401} />
      </div>
      <div className="absolute bg-[rgba(94,78,178,0.1)] h-[130px] left-[35px] top-[594px] w-[288px]" />
      <IconoWave />
      <TarjetaUno6 />
      <div className="absolute flex h-[35px] items-center justify-center left-[calc(20%+28px)] top-[378px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprar5 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda3 />
        </div>
      </div>
    </div>
  );
}

function TarjetaUno7() {
  return (
    <div className="absolute h-[270px] left-[calc(20%+28px)] opacity-30 top-[143px] w-[160px]" data-name="TarjetaUno">
      <div className="absolute bg-[#c4c4a9] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.33%_10.63%_90.37%_9.38%] leading-[16.888px] not-italic text-[20px] text-black text-center text-nowrap">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] inset-[72.22%_1.88%_13.33%_1.25%] leading-[12px] not-italic text-[11px] text-black text-center">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute inset-[12.96%_0_29.63%_0]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
    </div>
  );
}

function BotonComprar6() {
  return (
    <div className="h-[160px] opacity-30 relative w-[35px]" data-name="botonComprar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[22.5%_31.43%_21.88%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[89px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Descargar</p>
        </div>
      </div>
    </div>
  );
}

function MenuHamburger5() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconoWave1() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="IconoWave">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="iconoWave">
          <path clipRule="evenodd" d={svgPaths.p1d2c840} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FlechaIzquierda4() {
  return (
    <div className="relative size-full" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ModalGracias() {
  return (
    <div className="absolute h-[199px] left-[30px] top-[318px] w-[298px]" data-name="modalGracias">
      <div className="absolute bg-[#5e4eb2] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <div className="absolute font-['Arial:Bold',sans-serif] inset-[24.62%_2.35%_35.68%_2.68%] leading-[39.388px] not-italic text-[40px] text-center text-nowrap text-white">
        <p className="mb-0">{`¡Gracias `}</p>
        <p>por tu compra!</p>
      </div>
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[81.41%_9.4%_12.56%_9.4%] leading-[12px] not-italic text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Continuar en Electrosound</p>
      <div className="absolute flex inset-[2.01%_91.61%_85.93%_0.34%] items-center justify-center">
        <div className="flex-none rotate-[90deg] size-[24px]">
          <FlechaIzquierda4 />
        </div>
      </div>
    </div>
  );
}

function CompradoElectrosound1() {
  return (
    <div className="absolute bg-white h-[800px] left-[2410px] overflow-clip top-0 w-[360px]" data-name="Comprado_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <div className="absolute bg-[#c4c4a9] h-[121px] left-[33px] opacity-30 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[447px] w-[295px]" data-name="FondoTarjetaTexto" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[105px] leading-[12px] left-[44px] not-italic opacity-30 text-[11px] text-black text-justify top-[455px] w-[273px]">{`Rebel Empire was born in 2010 in Mexico City with a sound between electro body music and punk old school. He has performed at various festivals, including the "EBM United" in Mexico, being part of the main cartel. Among the most listened to his repertoire songs how "Control Body" with a large number of views on YouTube. He has remixed projects like: Red Industrie, Firemensch and Grosstracktor.`}</p>
      <div className="absolute h-[130px] left-[36px] opacity-30 top-[594px] w-[287px]" data-name="listaTracks2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20220929ALaS16401} />
      </div>
      <div className="absolute bg-[rgba(94,78,178,0.1)] h-[130px] left-[35px] opacity-30 top-[594px] w-[288px]" data-name="listaTracks" />
      <TarjetaUno7 />
      <div className="absolute flex h-[35px] items-center justify-center left-[calc(20%+28px)] top-[378px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprar6 />
        </div>
      </div>
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[180px] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Comprado</p>
      <MenuHamburger5 />
      <IconoWave1 />
      <ModalGracias />
    </div>
  );
}

function MenuHamburger6() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TarjetaUno8() {
  return (
    <div className="absolute contents left-[calc(20%+28px)] top-[143px]" data-name="TarjetaUno">
      <div className="absolute bg-[rgba(229,229,215,0.2)] h-[270px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[143px] w-[160px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.888px] left-[calc(20%+107px)] not-italic text-[20px] text-black text-center text-nowrap top-[152px] translate-x-[-50%]">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] h-[39px] leading-[12px] left-[calc(20%+107.5px)] not-italic text-[11px] text-black text-center top-[338px] translate-x-[-50%] w-[155px]">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute h-[155px] left-[calc(20%+28px)] top-[178px] w-[160px]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
    </div>
  );
}

function FadWaveform() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="fad:waveform">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="iconoWave">
          <path clipRule="evenodd" d={svgPaths.p1d2c840} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TarjetaUno9() {
  return (
    <div className="absolute h-[270px] left-[calc(20%+28px)] top-[143px] w-[160px]" data-name="TarjetaUno">
      <div className="absolute bg-[#c4c4a9] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.33%_10.63%_90.37%_9.38%] leading-[16.888px] not-italic text-[20px] text-black text-center text-nowrap">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] inset-[72.22%_1.88%_13.33%_1.25%] leading-[12px] not-italic text-[11px] text-black text-center">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute inset-[12.96%_0_29.63%_0]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
    </div>
  );
}

function BotonComprar7() {
  return (
    <div className="h-[160px] relative w-[35px]" data-name="botonComprar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[160px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[32.5%_31.43%_32.5%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[56px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Enviar</p>
        </div>
      </div>
    </div>
  );
}

function FlechaIzquierda5() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EnviarElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[2010px] overflow-clip top-[892px] w-[360px]" data-name="Enviar_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger6 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[180px] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Comprado</p>
      <TarjetaUno8 />
      <div className="absolute bg-[#c4c4a9] h-[121px] left-[33px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[447px] w-[295px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[105px] leading-[12px] left-[44px] not-italic text-[11px] text-black text-justify top-[455px] w-[273px]">{`Rebel Empire was born in 2010 in Mexico City with a sound between electro body music and punk old school. He has performed at various festivals, including the "EBM United" in Mexico, being part of the main cartel. Among the most listened to his repertoire songs how "Control Body" with a large number of views on YouTube. He has remixed projects like: Red Industrie, Firemensch and Grosstracktor.`}</p>
      <div className="absolute h-[130px] left-[36px] top-[594px] w-[287px]" data-name="listadeCanciones">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20220929ALaS16401} />
      </div>
      <div className="absolute bg-[rgba(94,78,178,0.1)] h-[130px] left-[35px] top-[594px] w-[288px]" />
      <FadWaveform />
      <TarjetaUno9 />
      <div className="absolute flex h-[35px] items-center justify-center left-[calc(20%+28px)] top-[378px] w-[160px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <BotonComprar7 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda5 />
        </div>
      </div>
    </div>
  );
}

function MenuHamburger7() {
  return (
    <button className="absolute block cursor-pointer inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function TarjetaUno10() {
  return (
    <div className="absolute contents left-[calc(20%+28px)] top-[143px]" data-name="TarjetaUno">
      <div className="absolute bg-[rgba(229,229,215,0.2)] h-[270px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[143px] w-[160px]" data-name="FondoTarjeta" />
      <div className="absolute bg-black h-[35px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[378px] w-[160px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.888px] left-[calc(20%+107px)] not-italic text-[20px] text-black text-center text-nowrap top-[152px] translate-x-[-50%]">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] h-[39px] leading-[12px] left-[calc(20%+107.5px)] not-italic text-[11px] text-black text-center top-[338px] translate-x-[-50%] w-[155px]">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute h-[155px] left-[calc(20%+28px)] top-[178px] w-[160px]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[12px] left-[calc(20%+108.5px)] not-italic text-[11px] text-center text-nowrap text-white top-[390px] tracking-[2.64px] translate-x-[-50%]">Descargar/Enviar</p>
    </div>
  );
}

function FadAutomation4P() {
  return (
    <div className="absolute left-[38px] size-[36px] top-[202px]" data-name="fad:automation-4p">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:automation-4p">
          <path clipRule="evenodd" d={svgPaths.p3b519b00} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[18.67%_18.13%_18.4%_18.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9314 22.6547">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p233a4300} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2c366d00} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function FadLogoAudacity1() {
  return (
    <div className="absolute left-[38px] overflow-clip size-[36px] top-[74px]" data-name="fad:logo-audacity">
      <Group2 />
    </div>
  );
}

function FadMicrophone1() {
  return (
    <div className="absolute left-[38px] size-[36px] top-[116px]" data-name="fad:microphone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:microphone">
          <path clipRule="evenodd" d={svgPaths.p17399c80} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FadKeyboard() {
  return (
    <div className="absolute left-[38px] size-[36px] top-[160px]" data-name="fad:keyboard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:keyboard">
          <path clipRule="evenodd" d={svgPaths.p119beb70} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[2843px] overflow-clip top-0 w-[360px]" data-name="Menu_Electrosound">
      <div className="absolute bg-[#5e4eb2] h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger7 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[180px] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[66px] tracking-[10.56px] translate-x-[-50%]">Comprado</p>
      <TarjetaUno10 />
      <div className="absolute bg-[rgba(229,229,215,0.2)] h-[121px] left-[33px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[447px] w-[295px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[105px] leading-[12px] left-[44px] not-italic text-[11px] text-black text-justify top-[455px] w-[273px]">{`Rebel Empire was born in 2010 in Mexico City with a sound between electro body music and punk old school. He has performed at various festivals, including the "EBM United" in Mexico, being part of the main cartel. Among the most listened to his repertoire songs how "Control Body" with a large number of views on YouTube. He has remixed projects like: Red Industrie, Firemensch and Grosstracktor.`}</p>
      <div className="absolute h-[130px] left-[36px] top-[594px] w-[287px]" data-name="Captura de Pantalla 2022-09-29 a la(s) 16.40 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20220929ALaS16401} />
      </div>
      <div className="absolute bg-[rgba(94,78,178,0.1)] h-[130px] left-[35px] top-[594px] w-[288px]" />
      <div className="absolute bg-black h-[729px] left-0 rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[31px] w-[360px]" data-name="menu" />
      <FadAutomation4P />
      <FadLogoAudacity1 />
      <FadMicrophone1 />
      <FadKeyboard />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[0px] left-[calc(20%+43px)] not-italic text-[#eff6b2] text-[16px] text-center text-nowrap top-[91px] tracking-[2.24px] translate-x-[-50%]">Discos</p>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[0px] left-[calc(20%+49px)] not-italic text-[#eff6b2] text-[16px] text-center text-nowrap top-[134px] tracking-[2.24px] translate-x-[-50%]">Artistas</p>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[0px] left-[calc(20%+59px)] not-italic text-[#eff6b2] text-[16px] text-center text-nowrap top-[220px] tracking-[2.24px] translate-x-[-50%]">Mercancia</p>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[0px] left-[calc(20%+91.5px)] not-italic text-[#eff6b2] text-[14px] text-center text-nowrap top-[178px] tracking-[1.96px] translate-x-[-50%]">Acerca de nosotros</p>
    </div>
  );
}

function MenuHamburger8() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FadLock1() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="fad:lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:lock">
          <path clipRule="evenodd" d={svgPaths.p16ec6f00} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BotonComprar8() {
  return (
    <div className="relative size-full" data-name="botonComprar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[298px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[41.92%_31.43%_41.64%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[49px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Pagar</p>
        </div>
      </div>
    </div>
  );
}

function BotonComprarApretado1() {
  return (
    <div className="relative size-full" data-name="botonComprarApretado">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[298px]">
          <div className="bg-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[37.22%_31.43%_36.94%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[77px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Cancelar</p>
        </div>
      </div>
    </div>
  );
}

function FormaPago() {
  return (
    <div className="absolute h-[500px] left-[31px] top-[143px] w-[298px]" data-name="formaPago">
      <div className="absolute bg-[#c4c4a9] inset-[0_0_20%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[0_0_90%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoDinero" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.4%_61.07%_93.2%_8.39%] leading-[16.888px] not-italic text-[18px] text-black text-center text-nowrap">$ 200 MXN</p>
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[14%_0_76%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoTarjeta" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[28%_44.63%_62%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoExpiraCVV" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[28%_0_62%_57.05%] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoExpiraCVV" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[42%_0_48%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoCorreo" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[56%_0_34%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoNombre" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[70%_0_20%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoTelefono" />
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[17.8%_36.91%_79.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-center text-nowrap tracking-[3.64px]">Número de tarjeta</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[31.8%_72.82%_65.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Expira</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[45.8%_34.56%_51.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Correo Electrónico</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[59.8%_69.8%_37.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Nombre</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[73.8%_66.44%_23.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Teléfono</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[31.8%_21.81%_65.8%_66.44%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">CVV</p>
      <div className="absolute flex inset-[83%_0_10%_0] items-center justify-center">
        <div className="flex-none h-[298px] rotate-[270deg] w-[35px]">
          <BotonComprar8 />
        </div>
      </div>
      <div className="absolute flex inset-[93%_0_0_0] items-center justify-center">
        <div className="flex-none h-[298px] rotate-[270deg] w-[35px]">
          <BotonComprarApretado1 />
        </div>
      </div>
    </div>
  );
}

function FlechaIzquierda6() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ComprandoElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[1210px] overflow-clip top-0 w-[360px]" data-name="Comprando_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger8 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[180.5px] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Comprando</p>
      <FadLock1 />
      <FormaPago />
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda6 />
        </div>
      </div>
    </div>
  );
}

function MenuHamburger9() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FadLock2() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="fad:lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:lock">
          <path clipRule="evenodd" d={svgPaths.p16ec6f00} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BotonComprar9() {
  return (
    <div className="relative size-full" data-name="botonComprar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[298px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[40.57%_31.43%_40.63%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[56px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Enviar</p>
        </div>
      </div>
    </div>
  );
}

function BotonComprarApretado2() {
  return (
    <div className="relative size-full" data-name="botonComprarApretado">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[298px]">
          <div className="bg-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[37.22%_31.43%_36.94%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[77px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Cancelar</p>
        </div>
      </div>
    </div>
  );
}

function FormaPago1() {
  return (
    <div className="absolute h-[500px] left-[31px] top-[143px] w-[298px]" data-name="formaPago">
      <div className="absolute bg-[#c4c4a9] inset-[0_0_20%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[0_0_90%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoDinero" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[14%_0_76%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoTarjeta" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[28%_44.63%_62%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoExpiraCVV" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[28%_0_62%_57.05%] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoExpiraCVV" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[42%_0_48%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoCorreo" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[56%_0_34%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoNombre" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[70%_0_20%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoTelefono" />
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[17.8%_63.42%_79.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Dirección</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[31.8%_69.46%_65.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Colonia</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[45.8%_34.56%_51.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Correo Electrónico</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[59.8%_38.93%_37.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Nombre Completo</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[73.8%_66.44%_23.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Teléfono</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[31.8%_21.81%_65.8%_66.44%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">C.P.</p>
      <div className="absolute flex inset-[83%_0_10%_0] items-center justify-center">
        <div className="flex-none h-[298px] rotate-[270deg] w-[35px]">
          <BotonComprar9 />
        </div>
      </div>
      <div className="absolute flex inset-[93%_0_0_0] items-center justify-center">
        <div className="flex-none h-[298px] rotate-[270deg] w-[35px]">
          <BotonComprarApretado2 />
        </div>
      </div>
    </div>
  );
}

function FlechaIzquierda7() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EnviandoElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[2410px] overflow-clip top-[892px] w-[360px]" data-name="enviando_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger9 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[calc(20%+108px)] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Envio</p>
      <FadLock2 />
      <FormaPago1 />
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[19.88%_67.78%_78.63%_15.56%] leading-[12px] not-italic text-[#302f2f] text-[13px] text-nowrap tracking-[3.64px]">Ciudad</p>
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda7 />
        </div>
      </div>
    </div>
  );
}

function MenuHamburger10() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FadLock3() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="fad:lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:lock">
          <path clipRule="evenodd" d={svgPaths.p16ec6f00} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BotonComprar10() {
  return (
    <div className="relative size-full" data-name="botonComprar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[298px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[40.57%_31.43%_40.63%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[56px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Enviar</p>
        </div>
      </div>
    </div>
  );
}

function BotonComprarApretado3() {
  return (
    <div className="relative size-full" data-name="botonComprarApretado">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[298px]">
          <div className="bg-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[37.22%_31.43%_36.94%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[77px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Cancelar</p>
        </div>
      </div>
    </div>
  );
}

function FormaPago2() {
  return (
    <div className="absolute h-[500px] left-[31px] opacity-30 top-[143px] w-[298px]" data-name="formaPago">
      <div className="absolute bg-[#c4c4a9] inset-[0_0_20%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[0_0_90%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoDinero" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[14%_0_76%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoTarjeta" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[28%_44.63%_62%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoExpiraCVV" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[28%_0_62%_57.05%] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoExpiraCVV" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[42%_0_48%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoCorreo" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[56%_0_34%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoNombre" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[70%_0_20%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoTelefono" />
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[17.8%_63.42%_79.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Dirección</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[31.8%_69.46%_65.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Colonia</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[45.8%_34.56%_51.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Correo Electrónico</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[59.8%_38.93%_37.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Nombre Completo</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[73.8%_66.44%_23.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Teléfono</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[31.8%_21.81%_65.8%_66.44%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">C.P.</p>
      <div className="absolute flex inset-[83%_0_10%_0] items-center justify-center">
        <div className="flex-none h-[298px] rotate-[270deg] w-[35px]">
          <BotonComprar10 />
        </div>
      </div>
      <div className="absolute flex inset-[93%_0_0_0] items-center justify-center">
        <div className="flex-none h-[298px] rotate-[270deg] w-[35px]">
          <BotonComprarApretado3 />
        </div>
      </div>
    </div>
  );
}

function FlechaIzquierda8() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FlechaIzquierda9() {
  return (
    <div className="relative size-full" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ModalGracias1() {
  return (
    <div className="absolute h-[199px] left-[30px] top-[318px] w-[298px]" data-name="modalGracias">
      <div className="absolute bg-[#5e4eb2] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <div className="absolute font-['Arial:Bold',sans-serif] inset-[24.62%_2.35%_35.68%_2.68%] leading-[39.388px] not-italic text-[40px] text-center text-nowrap text-white">
        <p className="mb-0">{`¡Gracias `}</p>
        <p>por tu compra!</p>
      </div>
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[81.41%_9.4%_12.56%_9.4%] leading-[12px] not-italic text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Continuar en Electrosound</p>
      <div className="absolute flex inset-[2.01%_91.61%_85.93%_0.34%] items-center justify-center">
        <div className="flex-none rotate-[90deg] size-[24px]">
          <FlechaIzquierda9 />
        </div>
      </div>
    </div>
  );
}

function EnviandoGraciasElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[2810px] overflow-clip top-[892px] w-[360px]" data-name="enviandoGracias_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger10 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[calc(20%+108px)] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Envio</p>
      <FadLock3 />
      <FormaPago2 />
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[19.88%_67.78%_78.63%_15.56%] leading-[12px] not-italic text-[#302f2f] text-[13px] text-nowrap tracking-[3.64px]">Ciudad</p>
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda8 />
        </div>
      </div>
      <ModalGracias1 />
    </div>
  );
}

function MenuHamburger11() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FadLock4() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="fad:lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:lock">
          <path clipRule="evenodd" d={svgPaths.p16ec6f00} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BotonComprar11() {
  return (
    <div className="relative size-full" data-name="botonComprar">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[298px]">
          <div className="bg-[#5e4eb2] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[41.92%_31.43%_41.64%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[49px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Pagar</p>
        </div>
      </div>
    </div>
  );
}

function BotonComprarApretado4() {
  return (
    <div className="relative size-full" data-name="botonComprarApretado">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[35px] rotate-[90deg] w-[298px]">
          <div className="bg-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="FondoTarjeta" />
        </div>
      </div>
      <div className="absolute flex inset-[37.22%_31.43%_36.94%_34.29%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[90deg] w-[77px]">
          <p className="font-['Arial:Bold',sans-serif] leading-[12px] not-italic relative text-[13px] text-center text-nowrap text-white tracking-[3.12px]">Cancelar</p>
        </div>
      </div>
    </div>
  );
}

function FormaPago3() {
  return (
    <div className="absolute h-[500px] left-[31px] top-[143px] w-[298px]" data-name="formaPago">
      <div className="absolute bg-[#c4c4a9] inset-[0_0_20%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="FondoTarjeta" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[0_0_90%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoDinero" />
      <p className="absolute font-['Arial:Bold',sans-serif] inset-[3.4%_61.07%_93.2%_8.39%] leading-[16.888px] not-italic text-[18px] text-black text-center text-nowrap">$ 200 MXN</p>
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[14%_0_76%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoTarjeta" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[28%_44.63%_62%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoExpiraCVV" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[28%_0_62%_57.05%] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoExpiraCVV" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[42%_0_48%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoCorreo" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[56%_0_34%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoNombre" />
      <div className="absolute bg-[rgba(229,229,215,0.6)] inset-[70%_0_20%_0] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="campoTelefono" />
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[17.8%_36.91%_79.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-center text-nowrap tracking-[3.64px]">Número de tarjeta</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[31.8%_72.82%_65.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Expira</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[45.8%_34.56%_51.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Correo Electrónico</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[59.8%_69.8%_37.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Nombre</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[73.8%_66.44%_23.8%_8.39%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">Teléfono</p>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[31.8%_21.81%_65.8%_66.44%] leading-[12px] not-italic text-[#a09d9d] text-[13px] text-nowrap tracking-[3.64px]">CVV</p>
      <div className="absolute flex inset-[83%_0_10%_0] items-center justify-center">
        <div className="flex-none h-[298px] rotate-[270deg] w-[35px]">
          <BotonComprar11 />
        </div>
      </div>
      <div className="absolute flex inset-[93%_0_0_0] items-center justify-center">
        <div className="flex-none h-[298px] rotate-[270deg] w-[35px]">
          <BotonComprarApretado4 />
        </div>
      </div>
    </div>
  );
}

function FlechaIzquierda10() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ComprandoEnviadoElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[1210px] overflow-clip top-[898px] w-[360px]" data-name="Comprando_Enviado_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger11 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[180.5px] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Comprando</p>
      <FadLock4 />
      <FormaPago3 />
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda10 />
        </div>
      </div>
    </div>
  );
}

function MenuHamburger12() {
  return (
    <div className="absolute inset-[0_1.11%_95.5%_88.89%]" data-name="menuHamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="menuHamburger">
          <path clipRule="evenodd" d={svgPaths.p18d38800} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TarjetaUno11() {
  return (
    <div className="absolute contents left-[calc(20%+28px)] top-[143px]" data-name="TarjetaUno">
      <div className="absolute bg-[rgba(229,229,215,0.2)] h-[270px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[143px] w-[160px]" data-name="FondoTarjeta" />
      <div className="absolute bg-black h-[35px] left-[calc(20%+28px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[378px] w-[160px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.888px] left-[calc(20%+107px)] not-italic text-[20px] text-black text-center text-nowrap top-[152px] translate-x-[-50%]">Rebel Empire</p>
      <div className="absolute font-['Arial:Regular',sans-serif] h-[39px] leading-[12px] left-[calc(20%+107.5px)] not-italic text-[11px] text-black text-center top-[338px] translate-x-[-50%] w-[155px]">
        <p className="mb-0">Movimiento Máquina</p>
        <p>(International Brotherhood of Machines)</p>
      </div>
      <div className="absolute h-[155px] left-[calc(20%+28px)] top-[178px] w-[160px]" data-name="PortadaRebel">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPortadaRebel} />
      </div>
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[12px] left-[calc(20%+108px)] not-italic text-[11px] text-center text-nowrap text-white top-[390px] tracking-[2.64px] translate-x-[-50%]">Detalle de compra</p>
    </div>
  );
}

function FadLock5() {
  return (
    <div className="absolute left-[calc(40%+18px)] size-[36px] top-[38px]" data-name="fad:lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="fad:lock">
          <path clipRule="evenodd" d={svgPaths.p16ec6f00} fill="var(--fill-0, #EFF6B2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FlechaIzquierda11() {
  return (
    <div className="relative size-[24px]" data-name="flechaIzquierda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="flechaIzquierda">
          <path d={svgPaths.pbc33600} fill="var(--fill-0, #EFF6B2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DetalleEnviadoElectrosound() {
  return (
    <div className="absolute bg-white h-[800px] left-[1610px] overflow-clip top-[898px] w-[360px]" data-name="Detalle_Enviado_Electrosound">
      <div className="absolute bg-black h-[800px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-0 w-[360px]" />
      <div className="absolute bg-black h-[40px] left-0 top-[760px] w-[360px]" />
      <div className="absolute h-[22px] left-[10px] top-[9px] w-[94px]" data-name="LogoElectrosound 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoPrincipal} />
      </div>
      <MenuHamburger12 />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[35px] leading-[16.888px] left-[180px] not-italic text-[12px] text-[rgba(229,229,215,0.6)] text-center top-[765px] translate-x-[-50%] w-[360px]">
        <p className="mb-0">Privacidad y Cokies</p>
        <p>Terminos y Condiciones</p>
      </div>
      <p className="absolute font-['Kremlin:Regular',sans-serif] leading-[50.563px] left-[calc(20%+108.5px)] not-italic text-[#eff6b2] text-[32px] text-center text-nowrap text-shadow-[-1px_2px_10px_#070127] top-[75px] tracking-[10.56px] translate-x-[-50%]">Detalle</p>
      <TarjetaUno11 />
      <div className="absolute bg-[rgba(229,229,215,0.2)] h-[121px] left-[33px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[447px] w-[295px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[105px] leading-[12px] left-[44px] not-italic text-[11px] text-black text-justify top-[455px] w-[273px]">{`Rebel Empire was born in 2010 in Mexico City with a sound between electro body music and punk old school. He has performed at various festivals, including the "EBM United" in Mexico, being part of the main cartel. Among the most listened to his repertoire songs how "Control Body" with a large number of views on YouTube. He has remixed projects like: Red Industrie, Firemensch and Grosstracktor.`}</p>
      <div className="absolute h-[130px] left-[36px] top-[594px] w-[287px]" data-name="Captura de Pantalla 2022-09-29 a la(s) 16.40 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20220929ALaS16401} />
      </div>
      <div className="absolute bg-[rgba(94,78,178,0.1)] h-[130px] left-[35px] top-[594px] w-[288px]" />
      <div className="absolute bg-black h-[729px] left-0 opacity-50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[31px] w-[360px]" data-name="menu" />
      <div className="absolute bg-[#e5e5d7] h-[338px] left-[calc(20%-3px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[222px] w-[219px]" data-name="detallefondo" />
      <div className="absolute h-[298px] left-[calc(20%+12px)] top-[239px] w-[188px]" data-name="detalle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.42%] left-[-7.94%] max-w-none top-[-5.7%] w-[116.95%]" src={imgDetalle} />
        </div>
      </div>
      <div className="absolute bg-[#5e4eb2] h-[51px] left-[calc(20%+12px)] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[486px] w-[188px]" data-name="FondoTarjeta" />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[12px] left-[calc(20%+106px)] not-italic text-[16px] text-center text-nowrap text-white top-[506px] tracking-[3.84px] translate-x-[-50%]">Sí, Comprar</p>
      <FadLock5 />
      <div className="absolute flex items-center justify-center left-[10px] size-[24px] top-[47px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <FlechaIzquierda11 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <BienvenidaElectrosound />
      <DiscosElectrosound />
      <ArtistaElectrosound />
      <ArtistaElectrosound1 />
      <DetalleElectrosound />
      <CompradoElectrosound />
      <CompradoElectrosound1 />
      <EnviarElectrosound />
      <MenuElectrosound />
      <ComprandoElectrosound />
      <EnviandoElectrosound />
      <EnviandoGraciasElectrosound />
      <ComprandoEnviadoElectrosound />
      <DetalleEnviadoElectrosound />
    </div>
  );
}