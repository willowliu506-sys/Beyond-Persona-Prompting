# Beyond Persona Prompting: A Cognitive-Process-Based Framework for ADHD Student Simulation with Large Language Models

<!-- Persona Prompting 的 representation gap → Cognitive-Process-Based technical contribution → ADHD student simulation scope → LLM implementation setting。 -->

## Abstract Page

<!-- Background → Research Gap → CPB Method → Three Experimental Studies → Main Results → Cautious Conclusion。 -->

## Acknowledgements

<!-- Acknowledge supervisory guidance → academic and technical support → personal support。 -->

## Acronyms

<!-- Define recurring terms consistently → reduce repetition → support technical readability。 -->

## Contents

<!-- Present the complete thesis hierarchy → support navigation → keep chapter and section numbering aligned。 -->

## 1  Introduction

<!-- Educational value of LLM simulated students → learner-representation mismatch → ADHD as the research case → CPB aim, questions and contributions。 -->

### Background and Motivation

<!-- Educational tutoring and intervention needs → value of LLM simulated students → importance of representing learner characteristics。 -->

### The Representation Problem

<!-- Multidimensional learner characteristics → monolithic persona representation → representation ambiguity and causal ambiguity。 -->

### 1.3 ADHD Student Simulation as the Research Case

<!-- ADHD as a multidimensional case → observable behaviour plus attention and working-memory processes → need for process-sensitive representation。 -->

### 1.4 Research Aim and Research Questions

<!-- Main research aim → Mechanistic Validity (RQ1) → Comparative Validity (RQ2) → Representational Robustness (RQ3)。 -->

### 1.5 Research Objectives

<!-- Derive requirements → design factorised representation → implement CPB → validate mechanisms → compare methods → test multidimensional robustness。 -->

### 1.6 Contributions

<!-- Process- and state-based ADHD representation → factorised learner architecture → controlled mechanism validation → traceable evaluation framework。 -->

### 1.7 Thesis Structure

<!-- Related work → methods → results → discussion → conclusions → future work。 -->

## 2  Related Work and Background

<!-- Learner simulation field → persona prompting → heterogeneous representation challenge → ADHD learning processes → process/state alternatives → evaluation and traceability gaps。 -->

### 2.1 LLM-Based Student Simulation

<!-- Educational uses and capabilities → simulated-learner development → learner representation as the central methodological question。 -->

### 2.2 Persona Prompting for Learner Representation

<!-- Persona/profile prompting methods → strengths for observable attributes → convenience and flexibility → limitation of placing heterogeneous attributes in one prompt。 -->

### 2.3 The Representation Challenge of Multidimensional Learner Characteristics

<!-- Learners are multidimensional → coexistence does not imply one computational mechanism → representation should match functional role。 -->

### 2.4 ADHD-Related Characteristics and Learning Processes

<!-- Attention allocation and distractibility → working-memory and processing constraints → knowledge acquisition and retention → behavioural manifestations。 -->

### 2.5 Process- and State-Based Approaches to Learner Modelling

<!-- Explicit learner models → cognitive/process models → knowledge-state and memory representations → precedent for Attention → WM → Encoding → LTM。 -->

### 2.6 Evaluation of Simulated Learners and Learning Outcomes

<!-- Persona and behavioural fidelity → task-performance evaluation → limits of self-consistency validation → need for process-sensitive evidence。 -->

#### 2.6.1 Evaluation of Learner Simulation and Persona Fidelity

<!-- Behavioural fidelity → persona fidelity → neurodivergent-simulation validation → distinguish identity consistency from learning-process validity。 -->

#### 2.6.2 Rubric-Based Short Answer Assessment

<!-- Constructed responses → automatic short-answer scoring → source-grounded rubrics → criterion-level assessment。 -->

#### 2.6.3 LLM-as-a-Judge and Checklist-Based Evaluation

<!-- Holistic Judge limitations → structured checklist scoring → criterion-level labels → reliability and stability validation。 -->

### 2.7 Explicit Knowledge States, Process Transparency and Traceability

<!-- Black-box input/output limitation → explicit Source → Available Input → LTM → Answer chain → inspectability and error attribution。 -->

### 2.8 Research Gap and Design Requirements

<!-- Representation conflation + process opacity + evaluation limitation → functional representation + factorisation + explicit knowledge state + traceability + controlled evaluation。 -->

## 3  Materials and Methods

<!-- Research strategy → materials → CPB components → assessment → methodological validation → main studies → metrics and reproducibility。 -->

### Research Design and Overall Strategy

<!-- Establish the three-stage evidence strategy → connect RQs to studies → define controlled-variable principles。 -->

#### 3.1.1 Overall Research Strategy

<!-- Mechanism Validation → Representation Comparison → Multidimensional Robustness。 -->

#### 3.1.2 Research Questions and Experimental Mapping

<!-- RQ1 → Study 1 mechanism evidence; RQ2 → Study 2 comparative evidence; RQ3 → Study 3 robustness evidence。 -->

#### 3.1.3 Controlled-Variable Principles

<!-- Hold materials, models, prompts and assessment constant → manipulate only target factors → keep condition metadata blind to the Judge。 -->

### 3.2 Instructional Materials and Preprocessing

<!-- Raw/OpenStax Material → Reference-Resolved Text → Teaching-Round Segmentation → Frozen Instructional Corpus；本节只定义模型学习什么。 -->

#### 3.2.1 Source Materials

<!-- Seven OpenStax-derived finance lessons → provenance and content scope → single-domain selection rationale → suitability for controlled short-answer learning。 -->

#### 3.2.2 Coreference Resolution and Text Preprocessing

<!-- Resolve cross-sentence and cross-round references before segmentation → prevent artificial ambiguity → preserve instructional meaning, knowledge content and information order。 -->

#### 3.2.3 Teaching-Round Segmentation

<!-- Preserve semantic and local coherence → construct frozen two- or three-sentence learning units → assign Lesson → Round → Sentence identifiers shared by all conditions。 -->

#### 3.2.4 Instructional Corpus Characterisation

<!-- Characterise seven lessons, teaching rounds, sentences and surface-word distributions before manipulation → assess corpus balance and structural anomalies → exclude questions, criteria and distractor statistics。 -->

### 3.3 Cognitive-Process-Based Framework

<!-- Given a Teaching Round: Attention → Working-Memory Processing → Available Input → Encoding → Explicit LTM → Answer；本节只定义学习机制。 -->

#### 3.3.1 Attention Filter

<!-- Define Attention OFF/ON → filter information following predefined distractor events → expose only filtered Available Input downstream → record removed identifiers and causes。 -->

#### 3.3.2 Working-Memory Processing Capacity

<!-- Run after Attention → compare quantitative processing demand with capacity → apply transparent FIFO removal → record WM-attributed information loss。 -->

##### 3.3.2.1 Processing Demand

<!-- Token-level surprisal → round-reset cumulative Processing Demand Bits → study-specific language-processing-demand proxy；定义 measure 而不在此选择 Low/High targets。 -->

##### 3.3.2.2 WM Capacity Threshold

<!-- Convert Processing Demand Bits into a fixed capacity constraint → trigger WM removal above threshold → treat the threshold as a study-specific control parameter, not a physiological estimate。 -->

#### 3.3.3 Knowledge Encoding

<!-- Available Input → shared Encoder → stored knowledge；Encoder cannot access removed source information and remains constant across conditions。 -->

#### 3.3.4 Explicit Long-Term Memory

<!-- Create and update an externally inspectable round-level knowledge state → support retention measurement and traceability without claiming biological equivalence to human LTM。 -->

#### 3.3.5 Memory-Constrained Question Answering

<!-- Provide only Explicit LTM rather than the full lesson → apply a shared Memory Restriction and QA procedure → make performance reflect experimentally acquired knowledge。 -->

### 3.4 Experimental Manipulations and Assessment Design

<!-- Processing-Demand Annotation → Target Selection → Questions → Distractor Manipulation → Atomic Criteria → Blind Criterion-Level Judge；本节定义如何操纵和测量学习。 -->

#### 3.4.1 Processing-Demand Stratification and Target Selection

<!-- Calculate demand for eligible rounds → rank within each lesson → select three lowest- and three highest-demand targets → create balanced lesson-relative Low/High strata。 -->

#### 3.4.2 Question Construction

<!-- Construct three Low-demand and three High-demand independent questions plus one cross-round integrative question per lesson → operationalise local acquisition and accumulated integration。 -->

#### 3.4.3 Distractor Construction

<!-- Insert irrelevant events before criterion-bearing target sentences → map Distractor ID → Target Sentence ID → Criterion → Question → control redundancy and alternative evidence。 -->

#### 3.4.4 Scoring Rubric and Atomic Checklist Criteria

<!-- Question → atomic, non-overlapping and source-grounded criteria → Source Sentence ID/Evidence mapping → criterion-level traceability across Source → Input → LTM → Answer。 -->

#### 3.4.5 Criterion-Level LLM-as-a-Judge Scoring

<!-- Question + evidence + reference + frozen criterion + student answer → condition-blind Correct/Absent/Contradicted labels → deterministic Python score aggregation。 -->

### 3.5 Methodological Validation

<!-- With materials, mechanisms, manipulations and measures fully defined, test whether they are valid and reliable enough for the three main studies。 -->

#### 3.5.1 Teaching-Material Integrity Checks

<!-- Verify segmentation, coreference resolution and round-length properties → show that constructed materials satisfy experimental requirements。 -->

#### 3.5.2 Processing-Demand Sensitivity Analysis

<!-- Compare alternative surprisal estimators → test rank and group agreement → show that demand conclusions are not estimator-specific。 -->

#### 3.5.3 LLM-Judge Reliability and Validation

<!-- Repeat judging → assess criterion agreement and score invariance → quantify cross-run and cross-model reliability。 -->

#### 3.5.4 Preliminary Knowledge Test

<!-- Question-only baseline → irrelevant-memory control → clean-course-memory condition → isolate learning from pretrained knowledge and prompt noncompliance。 -->

### 3.6 Main Experimental Design

<!-- Assemble validated components → run three studies in RQ order → retain complete artefacts and process logs。 -->

#### 3.6.1 End-to-End Experimental Workflow

<!-- Frozen Material → Cognitive Processing → Available Input → Encoding → LTM → QA → Judge → Analysis。 -->

#### 3.6.2 Study 1 — Cognitive-Mechanism Validation

<!-- Attention OFF/ON × WM OFF/ON ablation → isolate independent and combined mechanism effects → answer RQ1。 -->

#### 3.6.3 Study 2 — CPB versus Persona-Prompted Simulation

<!-- Prompt-NT vs Prompt-ADHD vs CPB-ADHD → distraction and processing-demand sensitivity → answer RQ2。 -->

#### 3.6.4 Study 3 — Cross-Attribute Robustness

<!-- Add Big Five and language ability → compare joint persona and factorised CPB representations → answer RQ3。 -->

### 3.7 Evaluation Metrics and Statistical Analysis

<!-- Define process, performance and robustness measures before results → align every metric with its research question。 -->

#### 3.7.1 RQ1 — Process and Information-Retention Metrics

<!-- Input Availability → mechanism-attributed loss → Encoding Retention → End-to-End Retention → Removed-ACU Recovery → Claim Precision。 -->

#### 3.7.2 RQ2 — Learning-Performance and Representation Metrics

<!-- Checklist performance → distraction sensitivity → demand sensitivity → paired differences → error traceability。 -->

#### 3.7.3 RQ3 — Robustness and Attribute-Preservation Metrics

<!-- ADHD-effect preservation after attribute addition → personality/language fidelity → cross-attribute interference and robustness。 -->

#### 3.7.4 Statistical Analysis

<!-- Paired and factorial comparisons → bootstrap confidence intervals → effect sizes → sensitivity and robustness analyses。 -->

### 3.8 Implementation, Reproducibility and Ethics

<!-- Document models and settings → freeze versions and hashes → define reproducibility artefacts → constrain ethical interpretation。 -->

#### 3.8.1 Models and Generation Settings

<!-- Record model versions, endpoints, temperatures and generation settings → keep configurations comparable across conditions。 -->

#### 3.8.2 Versioning, Caching and Reproducibility

<!-- Frozen datasets → prompt versions and hashes → content-addressed caches → run IDs and retained raw outputs。 -->

#### 3.8.3 Ethical Scope and Interpretation

<!-- Controlled computational representation → no claim of reproducing real ADHD individuals → scientific-use boundaries and responsible interpretation。 -->

## 4  Results

<!-- Validation evidence already established → report RQ1 mechanism results → RQ2 representation comparison → RQ3 robustness → integrated findings。 -->

### 4.1 Results Overview

<!-- Restate the three research questions → explain analysis order → separate methodological validation from substantive results。 -->

### 4.2 RQ1 — Cognitive-Mechanism Effects

<!-- Test whether CPB mechanisms alter information availability and knowledge state as intended → treat performance as downstream support。 -->

#### 4.2.1 Attention-Filtering Effects

<!-- Attention manipulation → targeted source removal → change in Available Input → manipulation-fidelity evidence。 -->

#### 4.2.2 Working-Memory Capacity Effects

<!-- WM constraint under high processing demand → expected information removal → load-sensitive mechanism evidence。 -->

#### 4.2.3 Combined Attention × WM Effects

<!-- Compare A0W0, A1W0, A0W1 and A1W1 → estimate independent, combined and interaction patterns。 -->

#### 4.2.4 Source → Available Input → LTM

<!-- Trace source information through upstream processing and encoding → locate where loss occurs → test unintended recovery。 -->

#### 4.2.5 RQ1 Summary

<!-- Synthesize manipulation fidelity and retention results → answer whether CPB works mechanistically as designed。 -->

### 4.3 RQ2 — CPB versus Persona-Prompted ADHD Simulation

<!-- Compare representation methods under controlled conditions → test whether learning behaviour reflects distraction and processing demand。 -->

#### 4.3.1 Overall Learning Performance

<!-- Compare Prompt-NT, Prompt-ADHD and CPB-ADHD → establish overall performance patterns and uncertainty。 -->

#### 4.3.2 Sensitivity to Controlled Distraction

<!-- Link question errors to experimentally targeted distractors → compare representation-specific distraction effects。 -->

#### 4.3.3 Sensitivity to Processing Demand

<!-- Compare low- and high-demand rounds → test whether representation methods produce predicted load effects。 -->

#### 4.3.4 Independent versus Integrative Learning

<!-- Contrast local independent questions with cross-round integration → identify differences in retained and combined knowledge。 -->

#### 4.3.5 Error Traceability

<!-- Trace CPB errors through Source → Available Input → LTM → Answer → contrast with persona-prompt opacity。 -->

#### 4.3.6 RQ2 Summary

<!-- Integrate performance, distraction, demand and traceability evidence → answer the comparative representation question。 -->

### 4.4 RQ3 — Cross-Attribute Robustness

<!-- Add personality and language attributes → test ADHD-pattern preservation → compare monolithic prompting with factorised control。 -->

#### 4.4.1 Added Learner Attributes

<!-- Define Big Five and language-ability manipulations → construct matched prompt-based and CPB conditions。 -->

#### 4.4.2 Preservation of ADHD-Related Learning Patterns

<!-- Re-estimate attention and WM effects after attribute addition → measure stability of ADHD-related patterns。 -->

#### 4.4.3 Attribute Fidelity

<!-- Verify that personality and language attributes remain observable → separate added-attribute success from ADHD-effect preservation。 -->

#### 4.4.4 Prompt-Based versus Factorised Representation

<!-- Joint persona prompt → cross-attribute interference; factorised CPB → functional separation and robustness comparison。 -->

#### 4.4.5 RQ3 Summary

<!-- Integrate effect preservation and attribute fidelity → answer the multidimensional robustness question。 -->

#### 4.1.1 LLM Judge

<!-- Question + checklist + source evidence + reference answer + student answer → blind criterion labels → deterministic score → reliability checks。 -->

### 4.2 RQ1: Cognitive-Mechanism Effects

<!-- Present the four-condition ablation matrix → quantify Available ACUs, mechanism-attributed removal and LTM retention。 -->

### 4.3 RQ2: CPB versus Persona-Prompted ADHD Simulation

<!-- Present comparative results for prompt and CPB representations → focus on controlled learning-condition sensitivity。 -->

### 4.4 RQ3: Cross-Attribute Robustness

<!-- Present robustness results after adding learner attributes → compare effect preservation and attribute fidelity。 -->

### 4.5 Summary of Findings

<!-- RQ1 mechanistic validity → RQ2 comparative validity → RQ3 representational robustness → main-RQ synthesis。 -->

## 5  Discussion

<!-- Answer the main RQ → interpret cognitive mechanisms → delimit persona prompting → develop factorised representation → implications, limitations and ethics。 -->

### 5.1 Answering the Main Research Question

<!-- Integrate RQ1–RQ3 evidence → state whether CPB is more theory-consistent, traceable and robust under the studied conditions。 -->

### 5.2 Interpreting the Cognitive-Process Results

<!-- Information entering the encoder → information retained in LTM → unintended recovery of filtered information → interpretation of mechanism fidelity。 -->

### 5.3 What Persona Prompting Can and Cannot Represent

<!-- Acknowledge strengths for response-facing attributes → identify limitations for learning-process fidelity → define appropriate scope。 -->

### 5.4 Factorised Student Representation

<!-- Cognitive Process + Knowledge State + Expression + Other Characteristics → conceptual separation of functional dimensions。 -->

### 5.5 Implications for LLM-Based Learner Simulation

<!-- Findings → implications for representation design → scope conditions → guidance for future synthetic-learner research。 -->

#### 5.5.1 From Persona Description to Functional Representation

<!-- Characteristic labels → functional locus → prompt response-facing attributes → explicit mechanisms for process-affecting attributes。 -->

#### 5.5.2 Learner Models May Need to Be Factorised Rather Than Monolithic

<!-- Separate cognition, knowledge, expression, personality and context → reduce cross-attribute interference → motivate modular learner architectures。 -->

#### 5.5.3 Evaluation Should Target Learning Processes and Outcomes, Not Only Persona Plausibility

<!-- Persona fidelity ≠ process validity → inspect acquisition, retention and controlled-task effects → evaluate both appearance and learning consequences。 -->

#### 5.5.4 Traceability May Be Important for Scientific Uses of Synthetic Learners

<!-- Input/output observation → explicit process chain → identify why errors occur → support research-oriented simulation and intervention testing。 -->

#### 5.5.5 Implications for Educational Use

<!-- Teaching-material and intervention stress testing → hypothesis generation → accessibility exploration → never substitute synthetic learners for human validation。 -->

### 5.6 Strengths and Limitations

<!-- Controlled mechanisms and traceability strengths → single-domain and model dependence → proxy-measure and external-validity limitations。 -->

### 5.7 Ethical Interpretation

<!-- Avoid stereotyping and diagnostic claims → distinguish computational conditions from real people → require transparent, cautious and human-validated use。 -->

## Chapter 6  Conclusions

<!-- Revisit the problem and main RQ → summarize RQ1–RQ3 evidence → state the principal contribution and its limits。 -->

## Chapter 7  Future Work

<!-- Human-learner validation → richer cognitive mechanisms → broader subjects and learner attributes → improved retrieval, longitudinal learning and educational evaluation。 -->

## References

<!-- Consolidate all cited primary and secondary sources → maintain one consistent citation style → verify bibliographic completeness。 -->

## Appendices

<!-- Prompts and rubrics → dataset schemas and validation details → supplementary results → reproducibility and source-code information。 -->
