import test from "node:test";
import assert from "node:assert/strict";
import {JOBS,searchJobs} from "../lib/portal-data.ts";
const active=JOBS.map(j=>({...j,expires:"2099-12-31"}));
test("encontra a competência sem depender de maiúsculas ou acentos",()=>{assert.deepEqual(searchJobs(active,"MIKROTIK").map(j=>j.id),["sb-003"]);assert.deepEqual(searchJobs(active,"tecnico em redes").map(j=>j.id),["sb-003"]);});
test("separa ocupações e combina cidade e modalidade",()=>{assert.deepEqual(searchJobs(active,"design").map(j=>j.id),["sb-004"]);assert.deepEqual(searchJobs(active,"","Tecnologia","Juazeiro do Norte, CE","Remoto").map(j=>j.id),["sb-004"]);assert.equal(searchJobs(active,"","Tecnologia","Barro, CE","Remoto").length,0);});
test("primeiro emprego retorna apenas oportunidades compatíveis",()=>{assert.deepEqual(searchJobs(active,"primeiro emprego").map(j=>j.id),["sb-002","sb-005","sb-006"]);});
test("vaga vencida sai da busca e busca vazia não perde dados",()=>{assert.equal(searchJobs([{...active[0],expires:"2000-01-01"}],"").length,0);assert.equal(searchJobs(active,"").length,active.length);assert.equal(searchJobs(active,"inexistente").length,0);assert.equal(active.length,6);});
