export type PseoService = Readonly<{
  kind: 'service';
  slug: string;
  name: string;
  title: string;
  description: string;
  intent: string;
  buyer: string;
  context: string;
  workflow: readonly string[];
  deliverables: readonly string[];
  evidence: readonly string[];
  readiness: string;
  agencySlug: string;
  agencyName: string;
  agencyThaiName: string;
  agencyStatus: 'incubating' | 'target' | 'locked';
  agencyStage: string;
}>;

export const pseoService: PseoService = {
  "kind": "service",
  "slug": "legal-capability-map",
  "name": "Legal capability map (future)",
  "title": "Legal Capability Map สำหรับระบบและธุรกรรมที่ต้องมี partner handoff",
  "description": "วางขอบเขต legal work และ partner handoff สำหรับงานที่ต้องใช้ผู้มีใบอนุญาต",
  "intent": "ต้องการรู้ว่าประเด็นสิทธิ หน้าที่ และความเสี่ยงทางกฎหมายใดต้องส่งต่อให้ผู้ประกอบวิชาชีพ",
  "buyer": "Founder, board และผู้บริหารที่มีความเสี่ยงทางกฎหมาย",
  "context": "หน้าเป็น future capability และการจัดขอบเขตงาน ไม่ใช่สำนักงานกฎหมายหรือคำแนะนำทางกฎหมาย",
  "workflow": [
    "ทำ issue inventory และ jurisdiction question",
    "แยก operational fact ออกจาก legal interpretation",
    "กำหนด partner handoff และ evidence ที่ต้องเตรียม",
    "จัด decision record สำหรับการคุยกับผู้มีใบอนุญาต"
  ],
  "deliverables": [
    "legal issue boundary",
    "fact/evidence request list",
    "qualified-partner handoff brief",
    "decision and follow-up register"
  ],
  "evidence": [
    "ไม่ให้คำแนะนำทางกฎหมายหรืออ้าง privilege",
    "ไม่อ้างใบอนุญาตหรือความสัมพันธ์กับสำนักงานใด",
    "ไม่รับข้อมูลคดีหรือเอกสารลับผ่าน public website"
  ],
  "readiness": "ต้องมี legal lead ที่มีคุณสมบัติ, jurisdiction, conflict check และ partner ที่รับช่วงได้ก่อนเปิด inquiry",
  "agencySlug": "legal",
  "agencyName": "Legal",
  "agencyThaiName": "กฎหมาย",
  "agencyStatus": "locked",
  "agencyStage": "P3"
};
