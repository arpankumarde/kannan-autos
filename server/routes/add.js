import express from 'express';
import { createDailyReport, createInsuranceReport } from '../controllers/addEntry.js';

export const router = express.Router()

router.post("/addDailyReport", createDailyReport)

router.post("/addInsuranceReport", createInsuranceReport)