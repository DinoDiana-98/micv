from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Image, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "output" / "pdf" / "CV_Leidy_Diana_Principe_Quispe.pdf"
PHOTO = ROOT / "img1.jpeg"
PAGE_W, PAGE_H = A4
INK = colors.HexColor("#182832")
MUTED = colors.HexColor("#617078")
LINE = colors.HexColor("#D7DCDA")
ACCENT = colors.HexColor("#A85635")
ACCENT_SOFT = colors.HexColor("#F1E4DB")
PAPER = colors.HexColor("#F7F6F2")
WHITE = colors.white

FONT = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("SegoeUI", str(FONT / "segoeui.ttf")))
pdfmetrics.registerFont(TTFont("SegoeUI-Bold", str(FONT / "segoeuib.ttf")))
pdfmetrics.registerFont(TTFont("SegoeUI-Italic", str(FONT / "segoeuii.ttf")))
pdfmetrics.registerFontFamily("SegoeUI", normal="SegoeUI", bold="SegoeUI-Bold", italic="SegoeUI-Italic", boldItalic="SegoeUI-Bold")

STYLES = {}
def make_style(name, **overrides):
    values = {"fontName": "SegoeUI", "textColor": INK, "fontSize": 8.4, "leading": 11.5}
    values.update(overrides)
    STYLES[name] = ParagraphStyle(name, **values)

make_style("kicker", fontName="SegoeUI-Bold", fontSize=7.6, leading=10, textColor=colors.HexColor("#D69B7D"), spaceAfter=4, tracking=1)
make_style("name", fontName="SegoeUI-Bold", fontSize=21.5, leading=24, textColor=WHITE, spaceAfter=3)
make_style("role", fontSize=8.8, leading=11.4, textColor=colors.HexColor("#E9DCD4"), spaceAfter=7)
make_style("contact", fontSize=7.8, leading=11, textColor=colors.HexColor("#F5F3EE"))
make_style("section", fontName="SegoeUI-Bold", fontSize=8.7, leading=11, textColor=ACCENT, spaceAfter=6, tracking=.8)
make_style("body", fontSize=9.3, leading=13.1, textColor=INK)
make_style("skill", fontSize=8.2, leading=11.3, textColor=INK)
make_style("date", fontName="SegoeUI-Bold", fontSize=7.8, leading=10.2, textColor=ACCENT)
make_style("job", fontName="SegoeUI-Bold", fontSize=9, leading=11.1, textColor=INK, spaceAfter=1)
make_style("company", fontName="SegoeUI-Bold", fontSize=7.8, leading=10, textColor=MUTED)
make_style("detail", fontSize=8.45, leading=11.7, textColor=MUTED)
make_style("projectState", fontName="SegoeUI-Bold", fontSize=7.2, leading=9, textColor=ACCENT, spaceAfter=4, tracking=.6)
make_style("projectTitle", fontName="SegoeUI-Bold", fontSize=17.5, leading=21, textColor=INK, spaceAfter=3)
make_style("projectText", fontSize=9.15, leading=12.6, textColor=MUTED, spaceAfter=5)
make_style("projectMeta", fontSize=8.3, leading=11.4, textColor=INK)
make_style("strengthTitle", fontName="SegoeUI-Bold", fontSize=9.2, leading=11.3, textColor=INK, spaceAfter=4)
make_style("strengthText", fontSize=8, leading=11, textColor=MUTED)
make_style("workTitle", fontName="SegoeUI-Bold", fontSize=8.5, leading=10.6, textColor=INK)
make_style("workDetail", fontSize=8.2, leading=11, textColor=MUTED)
make_style("link", fontName="SegoeUI-Bold", fontSize=7.8, leading=10.4, textColor=ACCENT, alignment=2)
make_style("mini", fontName="SegoeUI-Bold", fontSize=8, leading=10, textColor=WHITE)
make_style("contactPanel", fontSize=8, leading=11, textColor=INK)

def P(text, style):
    return Paragraph(text, STYLES[style])

def heading(text):
    return P(text.upper(), "section")

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(.55)
    canvas.line(doc.leftMargin, 27, PAGE_W-doc.rightMargin, 27)
    canvas.setFont("SegoeUI", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 15, "LEIDY DIANA PRINCIPE QUISPE  |  TRUJILLO, PERÚ")
    canvas.drawRightString(PAGE_W-doc.rightMargin, 15, f"{doc.page}  |  CURRÍCULUM VITAE")
    canvas.restoreState()

def header(width):
    contact = (
        "Trujillo, Perú  |  +51 904 908 206<br/>"
        "<link href='mailto:dprincipe.q@gmail.com' color='#F1BEA2'>dprincipe.q@gmail.com</link>"
        "  |  <link href='https://www.linkedin.com/in/leidy-diana-principe-quispe-8ba739131/' color='#F1BEA2'>LinkedIn</link>"
        "  |  <link href='https://github.com/DinoDiana-98' color='#F1BEA2'>GitHub</link>"
    )
    copy = [
        P("CURRÍCULUM VITAE", "kicker"),
        P("LEIDY DIANA<br/>PRINCIPE QUISPE", "name"),
        P("DESARROLLO DE SOFTWARE  |  SOPORTE TÉCNICO  |  QA", "role"),
        P(contact, "contact"),
    ]
    photo = Image(str(PHOTO), width=88, height=88)
    photo.hAlign = "RIGHT"
    t = Table([[copy, photo]], colWidths=[width-108, 108], rowHeights=[123])
    t.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),INK), ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
        ("LEFTPADDING",(0,0),(0,0),15), ("RIGHTPADDING",(0,0),(0,0),8),
        ("LEFTPADDING",(1,0),(1,0),4), ("RIGHTPADDING",(1,0),(1,0),12),
        ("TOPPADDING",(0,0),(-1,-1),8), ("BOTTOMPADDING",(0,0),(-1,-1),8),
        ("LINEBELOW",(0,0),(-1,-1),2.2,ACCENT),
    ]))
    return t

def experience(width):
    items = [
        ("MAR - SEP 2026","Programadora y analista de soporte","SOLTECJS",
         "Desarrollé con PHP y Laravel, brindé soporte a usuarios y trabajé con bases de datos. Apoyé pruebas de facturación electrónica y automatización con Python y Playwright."),
        ("NOV 2023 - ENE 2025","Desarrolladora de software y soporte tecnológico","Rolex Constructores SAC",
         "Implementé soluciones, brindé soporte tecnológico y desarrollé una aplicación móvil con geolocalización para el control de asistencia."),
        ("JUL - OCT 2023","Diseñadora BIM","Arqkon",
         "Diseñé planos para colegios del Bicentenario siguiendo estándares BIM internacionales."),
        ("JUN 2022 - FEB 2023","Prácticas preprofesionales de desarrollo web","Universidad Nacional de Trujillo - Facultad de Enfermería",
         "Desarrollé el sitio web institucional de la Facultad de Enfermería, señalado como contribución para la acreditación SINEACE."),
        ("FEB 2020 - FEB 2021","Técnico en monitoreo de fraude","Telefónica Ingeniería de Seguridad (TIS)",
         "Verifiqué solicitudes y ventas, detecté errores e indicios de fraude y reporté hallazgos en la Jefatura de Prevención."),
        ("SEP 2019 - FEB 2020","Digitadora","Tgestiona - Movistar Te Ayuda",
         "Operé aplicaciones de servicios móviles y fijos (Atis, CMS y Gestel) y escalé incidencias masivas."),
        ("DIC 2016 - SEP 2017","Asesora de ventas y back office","Teleatento - Movistar",
         "Promoví planes móviles por teléfono y resolví consultas; después apoyé la operación de Movistar fija en back office."),
    ]
    rows = [[P(date,"date"), [P(title,"job"),P(company,"company")], P(detail,"detail")]
            for date,title,company,detail in items]
    t = Table(rows, colWidths=[92,168,width-260], hAlign="LEFT")
    t.setStyle(TableStyle([
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(0,-1),0), ("RIGHTPADDING",(0,0),(0,-1),7),
        ("LEFTPADDING",(1,0),(1,-1),0), ("RIGHTPADDING",(1,0),(1,-1),9),
        ("LEFTPADDING",(2,0),(2,-1),8), ("RIGHTPADDING",(2,0),(2,-1),0),
        ("TOPPADDING",(0,0),(-1,-1),6), ("BOTTOMPADDING",(0,0),(-1,-1),7),
        ("LINEBELOW",(0,0),(-1,-2),.45,LINE),
    ]))
    return t

def project(title, focus, description, tech, width):
    content = [
        P("PRODUCTO PROPIO  |  EN DESARROLLO","projectState"),
        P(title,"projectTitle"),
        P(description,"projectText"),
        P(f"<b>ENFOQUE</b>  {focus}<br/><b>TECNOLOGÍAS</b>  {tech}","projectMeta"),
    ]
    t = Table([[content]], colWidths=[width])
    t.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),PAPER), ("BOX",(0,0),(-1,-1),.55,LINE),
        ("LINEABOVE",(0,0),(-1,0),2,ACCENT), ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),13), ("RIGHTPADDING",(0,0),(-1,-1),13),
        ("TOPPADDING",(0,0),(-1,-1),14), ("BOTTOMPADDING",(0,0),(-1,-1),14),
    ]))
    return t

def strengths(width):
    items = [
        ("Escucha y comunicación","Atendí consultas y promoví planes móviles por teléfono, explicando opciones y respondiendo dudas de clientes."),
        ("Seguimiento con criterio","Verifiqué ventas y solicitudes, reporté indicios de fraude y escalé incidencias para proteger la experiencia del cliente."),
        ("Comprensión técnica","Hoy combino soporte, desarrollo y QA para entender tanto a las personas como a los sistemas que utilizan."),
    ]
    col = width/3
    cells=[]
    for title,detail in items:
        cells.append([P(title,"strengthTitle"),P(detail,"strengthText")])
    t=Table([[cells[0],cells[1],cells[2]]],colWidths=[col,col,col])
    t.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(0,0),PAPER), ("BACKGROUND",(1,0),(1,0),colors.HexColor("#F3F1EB")),
        ("BACKGROUND",(2,0),(2,0),PAPER), ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),10), ("RIGHTPADDING",(0,0),(-1,-1),10),
        ("TOPPADDING",(0,0),(-1,-1),11), ("BOTTOMPADDING",(0,0),(-1,-1),11),
        ("LINEBEFORE",(1,0),(1,0),1,WHITE), ("LINEBEFORE",(2,0),(2,0),1,WHITE),
    ]))
    return t

def other_work(width):
    entries=[
      ("Pipeline DevSecOps","Práctica de seguridad en CI/CD con GitHub Actions, Gitleaks, Bandit y Trivy.","https://github.com/DinoDiana-98/devsecops-security-pipeline","Repositorio"),
      ("Sitio de la Facultad de Enfermería","Desarrollo web institucional durante las prácticas en la UNT.","https://dinodiana-98.github.io/facenf/","Ver sitio"),
      ("Aplicación móvil de asistencia","Solución con geolocalización desarrollada en Rolex Constructores SAC.",None,None),
      ("Laboratorio OWASP Top 10","Práctica de análisis de vulnerabilidades y reporte técnico.",None,None),
      ("CINAPRI EDU","Contenido educativo sobre prevención de estafas y ciberhigiene.","https://www.tiktok.com/@cinapri.pq","Ver canal"),
    ]
    rows=[]
    for title,detail,url,label in entries:
        link=P(f"<link href='{url}' color='#A85635'>{label} -&gt;</link>","link") if url else P("Experiencia aplicada","link")
        rows.append([P(title,"workTitle"),P(detail,"workDetail"),link])
    t=Table(rows,colWidths=[145,width-242,97],hAlign="LEFT")
    t.setStyle(TableStyle([
        ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
        ("LEFTPADDING",(0,0),(0,-1),0), ("RIGHTPADDING",(0,0),(0,-1),8),
        ("LEFTPADDING",(1,0),(1,-1),5), ("RIGHTPADDING",(1,0),(1,-1),8),
        ("LEFTPADDING",(2,0),(2,-1),4), ("RIGHTPADDING",(2,0),(2,-1),0),
        ("TOPPADDING",(0,0),(-1,-1),8), ("BOTTOMPADDING",(0,0),(-1,-1),8),
        ("LINEBELOW",(0,0),(-1,-2),.4,LINE),
    ]))
    return t

def operation_tools(width):
    rows=[
      [P("<font color='#A85635'><b>QA Y AUTOMATIZACIÓN</b></font>","skill"),
       P("Pruebas de facturación electrónica | Python | Playwright | SQL Server | MariaDB","skill")],
      [P("<font color='#A85635'><b>ATENCIÓN Y OPERACIÓN</b></font>","skill"),
       P("Atis | CMS | Gestel | +Simple | Remedy | Equifax","skill")],
    ]
    t=Table(rows,colWidths=[170,width-170],hAlign="LEFT")
    t.setStyle(TableStyle([
      ("BACKGROUND",(0,0),(-1,-1),PAPER),("VALIGN",(0,0),(-1,-1),"TOP"),
      ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),8),
      ("TOPPADDING",(0,0),(-1,-1),9),("BOTTOMPADDING",(0,0),(-1,-1),9),
      ("LINEBELOW",(0,0),(-1,0),.5,WHITE),
    ]))
    return t
def technologies(width):
    groups=[
      ("DESARROLLO WEB","PHP 8.3, Laravel 13, JavaScript, Blade, Vite, Tailwind CSS."),
      ("BASES DE DATOS","MariaDB, MySQL, SQLite, SQL Server."),
    ]
    rows=[[P(f"<font color='#A85635'><b>{title}</b></font>","skill"),P(detail,"skill")]
          for title,detail in groups]
    t=Table(rows,colWidths=[155,width-155],hAlign="LEFT")
    t.setStyle(TableStyle([
        ("VALIGN",(0,0),(-1,-1),"TOP"), ("LEFTPADDING",(0,0),(-1,-1),0),
        ("RIGHTPADDING",(0,0),(0,-1),8), ("RIGHTPADDING",(1,0),(1,-1),0),
        ("TOPPADDING",(0,0),(-1,-1),6), ("BOTTOMPADDING",(0,0),(-1,-1),6),
        ("LINEBELOW",(0,0),(-1,-2),.4,LINE),
    ]))
    return t

def build():
    if not PHOTO.is_file():
        raise FileNotFoundError(PHOTO)
    OUT.parent.mkdir(parents=True,exist_ok=True)
    width=PAGE_W-28*mm
    doc=SimpleDocTemplate(str(OUT),pagesize=A4,leftMargin=14*mm,rightMargin=14*mm,
        topMargin=9*mm,bottomMargin=13*mm,
        title="Currículum Vitae - Leidy Diana Principe Quispe",
        author="Leidy Diana Principe Quispe",
        subject="Experiencia, proyectos y habilidades profesionales")
    story=[
        header(width), Spacer(1,9), heading("01  |  Perfil profesional"),
        P("Experiencia en desarrollo web, soporte a usuarios y calidad de software, junto con trayectoria en atención, ventas, operaciones y prevención de fraude. En SOLTECJS trabajé con PHP y Laravel, bases de datos, pruebas de facturación electrónica y automatización con Python y Playwright. Me interesa aportar en prospección y seguimiento de servicios tecnológicos, combinando escucha, orden y criterio técnico.","body"),
        Spacer(1,9), heading("02  |  Competencias clave"),
    ]
    cells=[
        P("<b>Desarrollo</b><br/>PHP, Laravel, JavaScript","skill"),
        P("<b>Calidad</b><br/>Pruebas y automatización","skill"),
        P("<b>Soporte</b><br/>Atención a usuarios e incidencias","skill"),
        P("<b>Operación</b><br/>Verificación y seguimiento","skill"),
    ]
    comp=Table([[cells[0],cells[1]],[cells[2],cells[3]]],colWidths=[width/2,width/2])
    comp.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),PAPER), ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),11), ("RIGHTPADDING",(0,0),(-1,-1),11),
        ("TOPPADDING",(0,0),(-1,-1),8), ("BOTTOMPADDING",(0,0),(-1,-1),8),
        ("LINEBEFORE",(1,0),(1,-1),.7,WHITE), ("LINEABOVE",(0,1),(-1,1),.7,WHITE),
    ]))
    story += [comp, Spacer(1,11), heading("03  |  Experiencia profesional"), experience(width),
              Spacer(1,10), heading("04  |  QA y herramientas de operación"), operation_tools(width),
              PageBreak()]
    mini=Table([[P("LEIDY DIANA PRINCIPE QUISPE","mini"),
                 P("PROYECTOS  |  TECNOLOGÍAS  |  TRABAJO APLICADO","mini")]],
               colWidths=[width*.48,width*.52],rowHeights=[40])
    mini.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),INK),("VALIGN",(0,0),(-1,-1),"MIDDLE"),
        ("LEFTPADDING",(0,0),(-1,-1),12),("RIGHTPADDING",(0,0),(-1,-1),12),
        ("LINEBELOW",(0,0),(-1,-1),1.7,ACCENT),
    ]))
    story += [mini, Spacer(1,8), heading("05  |  Proyectos seleccionados"),
        P("Productos propios y trabajos aplicados en desarrollo, soporte y seguridad.","body"), Spacer(1,7),
        project("José","Atención, tickets y seguimiento.",
            "Sistema de centro de atención en desarrollo para organizar solicitudes y tickets con trazabilidad. Integra chat y actualizaciones en tiempo real.",
            "PHP 8.3+, Laravel 13, Blade, JavaScript, Vite, Reverb, Pusher.js, MariaDB, MySQL, SQLite, Docker, PHPUnit, Playwright y GitHub Actions.",width),
        Spacer(1,8),
        project("NISSI","Servicios, citas, usuarios y pagos.",
            "Producto propio de gestión en desarrollo, organizado alrededor de servicios, citas y disponibilidad. El alcance previsto incluye usuarios, roles, procesos y pagos.",
            "PHP 8.3, Laravel 13, Blade, JavaScript, Tailwind CSS 4, Git, Axios, Vite 7, MariaDB, SQLite y PHPUnit 12.",width),
        Spacer(1,10), heading("05  |  Fortalezas demostradas"), strengths(width),
        Spacer(1,10), heading("06  |  Otros trabajos y práctica"), other_work(width),
        Spacer(1,8), heading("07  |  Tecnologías principales"), technologies(width),
        Spacer(1,8)]
    contact=Table([[P("<b>CONTACTO</b><br/>"
        "<link href='mailto:dprincipe.q@gmail.com' color='#A85635'>dprincipe.q@gmail.com</link>"
        "  |  +51 904 908 206  |  "
        "<link href='https://www.linkedin.com/in/leidy-diana-principe-quispe-8ba739131/' color='#A85635'>LinkedIn</link>"
        "  |  <link href='https://github.com/DinoDiana-98' color='#A85635'>GitHub</link>","contactPanel")]],
        colWidths=[width])
    contact.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),ACCENT_SOFT),("BOX",(0,0),(-1,-1),.5,LINE),
        ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
        ("TOPPADDING",(0,0),(-1,-1),9),("BOTTOMPADDING",(0,0),(-1,-1),9),
    ]))
    story.append(contact)
    doc.build(story,onFirstPage=footer,onLaterPages=footer)
    print(OUT)

if __name__ == "__main__":
    build()
