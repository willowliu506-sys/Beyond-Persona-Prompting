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

### 1.1 Background and Motivation

<!-- Educational tutoring and intervention needs → value of LLM simulated students → importance of representing learner characteristics。 -->

### 1.2 The Representation Problem

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

Can I trust the experimental apparatus?

### 3.1 Research Design and Overall Strategy

<!-- Establish the three-stage evidence strategy → connect RQs to studies → define controlled-variable principles。 -->

#### 3.1.1 Overall Research Strategy

<!-- Mechanism Validation → Representation Comparison → Multidimensional Robustness。 -->

#### 3.1.2 Research Questions and Experimental Mapping

<!-- RQ1 → Study 1 mechanism evidence; RQ2 → Study 2 comparative evidence; RQ3 → Study 3 robustness evidence。 -->

把 Table 3.1 的设计原则固定成：

> **Research Question = 问什么**
>  **Evidential Role = 这组证据在整篇论文里证明什么**
>  **Experimental Comparison = 用什么对照回答它**
>  **Primary Evidence = 最终靠哪些 observable measures 得出结论**

这样每一行都应该形成完整链条：

> **Question → Validation construct → Contrast → Evidence**

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

#### 3.2.5 Classroom-Input Representations

<!-- Define the clean and classroom-event-annotated representations of each teaching round → explain square-bracketed event annotations and their stored target-sentence links → specify the input contract used by the later Attention mechanism without introducing question-based assignment。 -->

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

<!-- Question candidates and eligibility → Processing-Demand stratification and final selection → Atomic criteria and source-evidence mapping → Question-targeted distractor assignment → Blind criterion-level Judge；本节定义如何构建、操纵和测量学习结果。 -->

#### 3.4.1 Question Construction and Candidate Eligibility

<!-- Review teaching rounds for checklist-scorable content → construct source-grounded independent candidates and one cross-round integrative item → freeze question, source mapping, reference answer and provisional checklist before demand-based selection。 -->

#### 3.4.2 Processing-Demand Stratification and Final Item Selection

<!-- Rank eligible independent candidates within each lesson by source-round PDB → select the three lowest and three highest values → balance criterion counts → retain lesson-relative Low/High labels and one non-stratified integrative item。 -->

#### 3.4.3 Scoring Rubric and Atomic Checklist Criteria

<!-- Freeze each selected question's atomic, non-overlapping and source-grounded criteria → map every Criterion to Source Sentence ID and exact Evidence Span → establish the assessment structure required for target-sentence derivation and Source → Input → LTM → Answer traceability。 -->

#### 3.4.4 Question-Targeted Distractor Assignment

<!-- After questions, criteria and source-evidence mappings are frozen, derive one unique and reproducible target sentence for each independent question using maximum criterion coverage and a source-order tie-break → record Target Criterion Coverage and acknowledge criterion-coverage-weighted rather than random targeting → assign and insert one classroom event immediately before the target → preserve Question ID → Criterion → Target Sentence ID → Event traceability while permitting related knowledge elsewhere in the lesson。 -->

#### 3.4.5 Criterion-Level LLM-as-a-Judge Scoring

<!-- Question + evidence + reference + frozen criterion + student answer → condition-blind Correct/Absent/Contradicted labels → deterministic Python score aggregation。 -->

### 3.5 Methodological Validation and Quality Assurance

<!-- With materials, mechanisms, manipulations and measures fully defined, test whether they are valid and reliable enough for the three main studies。 -->

这部分建议 1–2 段，不要直接进入 3.5.1。

你前面的 Methods 已经包含很多人工构造或 computationally operationalised components：

- preprocessed instructional material；
- teaching-round segmentation；
- processing-demand proxy；
- Low/High target selection；
- atomic checklist rubrics；
- LLM Judge；
- explicit LTM / memory restriction。

这些如果不验证，会存在一个严重解释问题：

> 后面看到 RQ1/RQ2/RQ3 effect 时，到底是 learner representation 的 effect，还是材料、proxy、Judge 或 memory-access failure 导致的 artifact？

所以 3.5 opening 应该建立：

> **The purpose of methodological validation was to rule out alternative methodological explanations before interpreting the three main studies.**

然后说明四个 quality gates。

**建议放一张总表，而不是总框架图**
**Table 3.X — Methodological Validation Framework**

| Validation component   | Potential threat                    | Validation question                      | Evidence                   | Decision criterion              |
| ---------------------- | ----------------------------------- | ---------------------------------------- | -------------------------- | ------------------------------- |
| Instructional material | preprocessing/segmentation artifact | Was instructional meaning preserved?     | manual + structural checks | no unresolved material issue    |
| Processing demand      | estimator dependence                | Are Low/High classifications robust?     | rank/group agreement       | stable target classification    |
| LLM Judge              | scoring unreliability               | Does Judge agree with humans and itself? | κ, F1, agreement, MAE      | predefined reliability criteria |
| Memory access          | pretrained/source leakage           | Does QA depend on supplied LTM?          | control conditions         | expected score ordering         |

这张表很值钱。

它会让 reader 一开始就明白：

> 3.5 不是四个零碎 sanity checks，而是一套系统的 methodological QA framework。

#### 3.5.1 Teaching-Material Integrity Checks

<!-- Verify segmentation, coreference resolution and round-length properties → show that constructed materials satisfy experimental requirements。 -->

材料有没有问题？这一部分不要写得太长。

它真正要证明的是：

> **所有实验条件接收到的是语义完整、结构一致、没有因为 preprocessing 人为损坏的 instructional material。**

3.5.1 的行文逻辑

**第一段：Validation threat

先说明为什么需要检查。

你的 source material经过：

> raw OpenStax text
>  → coreference resolution
>  → segmentation
>  → IDs / rounds

因此可能引入：

- unresolved references；
- semantic distortion；
- information deletion；
- duplicated content；
- unnatural round boundaries；
- extreme length imbalance；
- target sentence脱离必要上下文。

所以这里不是普通 dataset cleaning，而是在排除：

> **material-construction confound**。

------

**第二部分：检查哪些东西

建议分成三类。

**A. Semantic integrity

检查：

- coreference resolution 是否保持原意；
- 有没有增加新的 factual content；
- 有没有删除必要限定；
- sentence ordering 是否保持；
- resolved entity 是否正确。

最好人工复核全部修改过的 coreference cases，而不是抽样，如果量不是特别大。

------

**B. Segmentation integrity

检查：

- 每 round 是否形成语义完整单位；
- 是否出现 pronoun/referent 被切断；
- criterion-bearing sentence 是否依赖上一 round 未包含的信息；
- round 长度是否异常；
- 是否有非常短/非常长的 outlier。

------

**C. Structural comparability

检查：

- 7 lessons 的 round 数；
- sentence 数；
- word/token distribution；
- 是否有明显 structural anomaly。

这里不要要求七篇材料完全一样。

你只是需要证明：

> 没有明显到会破坏实验设计的异常。

------

**数据怎么报告

我建议一个主表：

**Table 3.X — Instructional-Material Integrity Checks

| Check                  | Units checked | Issues detected | Corrections made | Remaining unresolved |
| ---------------------- | ------------- | --------------- | ---------------- | -------------------- |
| Coreference resolution | ...           | ...             | ...              | 0                    |
| Semantic preservation  | ...           | ...             | ...              | 0                    |
| Round coherence        | ...           | ...             | ...              | 0                    |
| ID consistency         | ...           | ...             | ...              | 0                    |

然后一张小型 descriptive table：

**Table 3.X — Final Instructional Corpus Characteristics

Lesson / rounds / sentences / mean words per round / range。

如果 3.2.4 已经有这张表，就**不要在这里重复**。

这里可以引用：

> Corpus characteristics were reported in Section 3.2.4; the present validation specifically assessed integrity after preprocessing.

最后一句要形成 quality-gate decision

例如逻辑上：

Following correction, no unresolved preprocessing or segmentation issues remained that were judged capable of altering the intended instructional propositions; the corpus was therefore frozen before question and experimental generation.

这句话很重要：

validated → frozen

#### 3.5.2 Processing-Demand Sensitivity Analysis

<!-- Compare alternative surprisal estimators → test rank and group agreement → show that demand conclusions are not estimator-specific。 -->

role of processing-demand proxy;

estimator-dependence threat;

primary vs alternative estimators;

rank agreement;

Low/High group agreement;

optional downstream sensitivity;

estimator freezing decision.

**Figure: primary vs alternative demand estimates**
 **Table: rank/group agreement**

#### 3.5.3 LLM-Judge Reliability and Human Validation

<!-- Repeat judging → assess criterion agreement and score invariance → quantify cross-run and cross-model reliability。 -->

Judge 给出的 checklist score 靠谱吗？

human–LLM validation

- why Judge must be treated as a measurement instrument;
- validation sample;
- human reference scoring;
- human–human agreement;
- human–LLM agreement;
- criterion-level validity;
- question-score agreement;
- repeatability;
- verbosity/language robustness;
- semantic minimal-pair test;
- acceptance criteria;
- Judge freezing decision.

**Table: validation sample**
 **Table: human–LLM reliability metrics**
 **Figure: confusion matrix, optional**
 **Table: repeatability/robustness**

#### 3.5.4 Pretrained-Knowledge and Memory-Access Controls

<!-- Question-only baseline → irrelevant-memory control → clean-course-memory condition → isolate learning from pretrained knowledge and prompt noncompliance。 -->

- pretrained-knowledge threat;
- memory-leakage threat;
- question-only baseline;
- irrelevant-memory control;
- clean-course-memory positive control;
- expected contrasts;
- criterion-level and total-score comparison;
- decision on whether questions/QA protocol adequately measure experimentally accessible knowledge.

**Figure: scores across memory controls**
 **Table: criterion-level control results**

**Closing**

- four gates satisfied/not satisfied;
- components frozen;
- transition into 3.6 Main Experimental Design.

### 3.6 Main Experimental Design

<!-- Assemble validated components → run three studies in RQ order → retain complete artefacts and process logs。 -->

3.6 开头建议 1–2 段。

第一段承接 3.5：

> 前面的 sections 已经定义并验证了 instructional corpus、CPB processing mechanisms、assessment rubric、Judge 和 memory-access controls。接下来三项主实验使用这些 frozen components 来回答 RQ1–RQ3。

第二段说明三项 Study 是递进的：

> Study 1 tests whether the CPB mechanisms produce intended internal processing effects.
>  Study 2 compares CPB with persona prompting under matched learning conditions.
>  Study 3 tests whether these representational differences remain stable when additional learner attributes are introduced.

这一步很重要，因为三项实验不是并列：

> Study 1 = mechanism validity
>  → Study 2 = representation validity
>  → Study 3 = multidimensional robustness

#### 3.6.1 End-to-End Experimental Workflow

<!-- Frozen Material → Cognitive Processing → Available Input → Encoding → LTM → QA → Judge → Analysis。 -->

写短，只做 workflow integration。

这一节建议真的写短。

它的功能不是解释 component，而是让 reader 看到：

> **一次完整 experimental run 到底发生什么。**

------

建议行文顺序

1. 定义 experimental unit

先明确：

- 一个 run 对应什么？
- lesson × condition × seed？
- teaching round 还是完整 lesson？
- 一个 learner instance 是否学习完整 lesson？
- question 是每轮后问还是 lesson 结束后统一问？

这个非常重要。

最好明确写：

> The primary experimental unit was one simulated learner run under one predefined condition on one lesson.

如果你不是这样，就按你真实设计写。

------

2. 给出 run pipeline

只需要按时间顺序：

> load frozen lesson
>  → apply condition-specific representation
>  → process teaching rounds
>  → update explicit LTM
>  → administer questions
>  → score with frozen Judge
>  → compute predefined metrics
>  → store full trace logs

Prompt-only baseline 则说明：

> uses matched materials/questions, but without CPB intermediate filtering/state mechanisms.

------

3. 说明 frozen 与 variable components

这一段非常重要。

例如：

**Frozen across studies**

- materials；
- questions；
- rubric；
- Judge；
- model version；
- generation settings。

**Varied by study**

- Attention；
- WM；
- learner representation；
- distractor；
- Language Ability；
- BF profile。

------

4. 说明 repeated runs / seeds

要交代：

- 每 condition × lesson 跑几次；
- seed 如何设置；
- 为什么需要重复；
- 是否 matched seeds。

#### 3.6.2 Study 1 — Cognitive-Mechanism Validation

<!-- Attention OFF/ON × WM OFF/ON ablation → isolate independent and combined mechanism effects → answer RQ1。 -->

#### 3.6.3 Study 2 — CPB versus Persona-Prompted Simulation

<!-- Writing order: state the Study 2 objective → define the Prompt-NT, Prompt-ADHD and four-level CPB conditions → explain the distraction/no-distraction setup → define theoretical consistency before observing outcomes → specify planned comparisons → transition to the quantitative metrics in Section 3.7.2。 -->

<!-- Experimental conditions: compare Prompt-NT and Prompt-ADHD with zero-, low-, medium-, and high-constraint CPB conditions under matched instructional materials, assessment items, answer-generation settings and scoring procedures。 -->

##### 3.6.3.1 Operationalisation of Theoretical Consistency

<!-- Define theoretical consistency through three pre-specified behavioural patterns: (1) expected NT–ADHD differentiation under controlled distraction in the persona-prompted conditions; (2) graded changes in learning performance across increasing CPB cognitive-constraint levels; and (3) a stronger negative relationship between instructional processing demand and performance under stronger cognitive constraints。 State explicitly that these patterns were specified before examining Study 2 outcomes and that Section 3.7.2 defines their numerical operationalisation。 -->

<!-- Planned comparisons should follow this definition: compare Prompt-NT with Prompt-ADHD under the controlled distraction manipulation → test ordered contrasts across the four CPB constraint levels → test whether the PDB–performance relationship becomes more negative as cognitive constraint increases → connect each comparison directly to RQ2。 -->

#### 3.6.4 Study 3 — Cross-Attribute Robustness

<!-- Add Big Five and language ability → compare joint persona and factorised CPB representations → answer RQ3。 -->

### 3.7 Evaluation Metrics and Statistical Analysis

<!-- Define process, performance and robustness measures before results → align every metric with its research question。 -->

#### 3.7.1 RQ1 — Process and Information-Retention Metrics

<!-- Input Availability → mechanism-attributed loss → Encoding Retention → End-to-End Retention → Removed-ACU Recovery → Claim Precision。 -->

#### 3.7.2 RQ2 — Learning-Performance and Representation Metrics

<!-- Translate the three theory-consistent patterns defined in Section 3.6.3.1 into pre-specified numerical measures。 -->

<!-- (1) Persona-prompted NT–ADHD differentiation: calculate the Prompt-NT minus Prompt-ADHD checklist-score difference under controlled distraction; where both distraction and no-distraction observations are available, additionally estimate the representation-by-distraction interaction or difference-in-differences。 -->

<!-- (2) Graded CPB constraint response: report mean checklist performance at zero, low, medium and high cognitive-constraint levels; quantify the ordered pattern using a pre-specified monotonic trend test or ordinal linear contrast, supported by adjacent-level differences and uncertainty intervals。 -->

<!-- (3) Processing-demand sensitivity: estimate the association between source-round PDB and checklist performance within each CPB constraint level using a correlation or regression slope; test whether the slope becomes more negative under stronger cognitive constraints through a PDB-by-constraint interaction。 -->

<!-- Retain the broader RQ2 measures: overall checklist performance, distraction sensitivity, demand sensitivity, paired differences and Source → Available Input → Explicit LTM → Answer error traceability。 Keep confirmatory indicators distinct from descriptive or exploratory analyses。 -->

#### 3.7.3 RQ3 — Robustness and Attribute-Preservation Metrics

<!-- ADHD-effect preservation after attribute addition → personality/language fidelity → cross-attribute interference and robustness。 -->

#### 3.7.4 Statistical Analysis

<!-- Paired and factorial comparisons → bootstrap confidence intervals → effect sizes → sensitivity and robustness analyses。 -->

### 3.8 Implementation, Reproducibility and Ethics

<!-- Document models and settings → freeze dataset and prompt versions → define reproducibility artefacts → constrain ethical interpretation。 -->

#### 3.8.1 Models and Generation Settings

<!-- Record model versions, endpoints, temperatures and generation settings → keep configurations comparable across conditions。 -->

#### 3.8.2 Versioning, Caching and Reproducibility

<!-- Frozen datasets and prompt versions → content-addressed caches → run IDs and retained raw outputs。 -->

#### 3.8.3 Ethical Scope and Interpretation

<!-- Controlled computational representation → no claim of reproducing real ADHD individuals → scientific-use boundaries and responsible interpretation。 -->
<!--RQ1 一句话，RQ2 一句话，RQ3 一句话，Main RQ 一句话，不要变成另一个 mini-results chapter。例如：RQ1 established mechanism fidelity. RQ2 showed whether CPB generated stronger sensitivity to controlled learning conditions than persona prompting. RQ3 assessed whether such effects survived multidimensional attribute manipulation.然后进入 Discussion。-->

## 4  Results

<!-- Validation evidence already established → report RQ1 mechanism results → RQ2 representation comparison → RQ3 robustness → integrated findings。 -->

Chapter 4 开头只需要一句交代：

> *The methodological checks reported in Section 3.5 established the suitability of the instructional materials, processing-demand measure, memory-access controls, and scoring procedure. This chapter therefore focuses exclusively on the substantive results corresponding to RQ1–RQ3.*

这样 reader 会非常舒服。

他们知道：

> instrument 已经验证过了，
>  现在开始看真正实验结果。

### 4.1 Results Overview

<!-- Restate the three research questions → explain analysis order → separate methodological validation from substantive results。 -->

What does the apparatus reveal about learner representation?

### 4.2 RQ1 — Cognitive-Mechanism Effects

<!-- Test whether CPB mechanisms alter information availability and knowledge state as intended → treat performance as downstream support。 -->

#### 4.2.1 Encoding-Only Baseline

<!--A0W0-->

#### 4.2.2 Attention-Filtering Effects

<!-- A1W0 vs A0W0。-->

#### 4.2.3 Working-Memory Capacity Effects

<!-- A0W1 vs A0W0。 -->

#### 4.2.4 Combined Attention × WM Effects

<!-- A1W1 -->

#### 4.2.5 End-to-End Information-Loss Attribution and Traceability

<!-- Trace source information through upstream processing and encoding → locate where loss occurs → test unintended recovery。 -->

完整做：

> Source
>  → after Attention
>  → after WM
>  → Encoding
>  → LTM
>  → Answer

这一节才正式回答：

> error 可以定位在哪里。

#### 4.2.5 RQ1 Summary

<!-- Synthesize manipulation fidelity and retention results → answer whether CPB works mechanistically as designed。 -->

### 4.3 RQ2 — CPB versus Persona-Prompted ADHD Simulation

<!-- Compare representation methods under controlled conditions → test whether learning behaviour reflects distraction and processing demand。 -->

#### 4.3.1 Persona-Prompted NT–ADHD Differentiation

<!-- Prompt NT vs ADHD，有/无 distraction。 -->

回答：

> persona prompt本身能不能产生预期 NT–ADHD learning difference？

#### 4.3.2 Graded CPB Constraint Effects

<!-- 四档 CPB，有无干扰得分对比-->

回答：

> constraint 越强，performance 是否呈 graded change？

#### 4.3.3 Sensitivity to Processing Demand

<!-- PDB × score，比较不同 representation / constraint level 的 slope 或 correlation。 -->

回答：

> PDB 越高，score 是否越低？这种 slope 是否随 constraint strength 改变？

#### 4.3.4 Independent versus Integrative Learning

<!-- Contrast local independent questions with cross-round integration → identify differences in retained and combined knowledge。 -->

回答：

> constraint effect 是否在跨信息整合任务上更明显？

这是 **secondary behavioural evidence**。

#### 4.3.5 RQ2 Summary

<!-- Integrate performance, distraction, demand and traceability evidence → answer the comparative representation question。 -->

### 4.4 RQ3 — Cross-Attribute Robustness

<!-- Add personality and language attributes → test ADHD-pattern preservation → compare monolithic prompting with factorised control。 -->

#### 4.4.1 Aligned-Profile Sensitivity

报告：

> A1 High Language + congruent BF
>  vs
>  A2 Low Language + challenging BF

看：

> cues aligned 时 Prompt Only 是否出现 amplification。

#### 4.4.2 Conflict-Profile Robustness

报告：

> B1 High Language + challenging BF
>  vs
>  B2 Low Language + congruent BF

看：

> contradictory cues 下是否出现 dominance / entanglement / material-dependent instability。

#### 4.4.3 Preservation of ADHD-Related Learning Effects

再问：

> 加入 Language/BF 后，CPB 原有 ADHD-related attention / WM pattern 是否保留？

这个才真正对应你的：

> representational robustness。

#### 4.4.4 Attribute Fidelity and Cross-Attribute Interference

这里再检查：

> language 是否真的表现为 language differences；
>  BF 是否真的表现出来；
>  同时 knowledge outcome 是否被不该影响的属性污染。

#### 4.4.5 Prompt-Based versus Factorised Representation

最后综合：

> Prompt Only 的 cue amplification / conflict instability
>  vs
>  CPB factorised representation 的 stability。

#### 4.4.6 RQ3 Summary

<!-- Integrate effect preservation and attribute fidelity → answer the multidimensional robustness question。 -->

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

<!-- Controlled mechanisms and traceability strengths → single-domain and model dependence → proxy-measure and external-validity limitations → criterion-coverage-weighted distractor targeting increased manipulation detectability but did not constitute random sampling of question-relevant evidence。 -->

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
