## 4  Results

### 4.1 RQ1 — CPB Mechanism Validation

#### 4.1.1 SQ1 — Mechanism Execution

SQ1 用于检验 Attention 和 Working-Memory mechanisms 是否严格按照预先注册的规则执行。本研究使用了四个 implementation-fidelity measures。Attention Target-Removal Fidelity (ATRF) 检查应被 Attention 移除的 target sentences 是否被正确删除；Non-Target Preservation Rate (NTPR) 检查不应被 Attention 影响的 instructional information 是否被正确保留。Working-Memory Trigger Agreement (WMTA) 检查实际 WM trigger 是否与冻结的 processing-demand–capacity rule 一致；FIFO Rule Fidelity (FRF) 则检查 WM 在触发后是否按照预定义的 within-round FIFO-style rule 移除了 Attention 后最早仍然可用的 instructional sentence。Table 4.RQ1-1 汇总了四个 Study 1 conditions 的 implementation-fidelity results 及 observed violations。

**Table 4.RQ1-1. Mechanism execution fidelity across Study 1 conditions**

| Condition |  ATRF |  NTPR |  WMTA |   FRF | Violations |
| --------- | ----: | ----: | ----: | ----: | ---------: |
| **A0W0**  |   N/A | 1.000 | 1.000 |   N/A |          0 |
| **A1W0**  | 1.000 | 1.000 | 1.000 |   N/A |          0 |
| **A0W1**  |   N/A | 1.000 | 1.000 | 1.000 |          0 |
| **A1W1**  | 1.000 | 1.000 | 1.000 | 1.000 |          0 |

Table 4.RQ1-1显示，所有适用的implementation-fidelity measures均为1.000，且未发现任何implementation violation。在每个Attention-ON condition中，冻结的42个eligible targets均被正确移除，且没有non-target information被误删；在每个WM-ON condition中，相同的32个high-demand Teaching Rounds均按照注册规则触发WM restriction并正确执行FIFO-style removal。Attention或WM关闭时也未发生相应的非预期移除。因此，SQ1得到支持：Attention和WM mechanisms均按照冻结规则正确执行，为后续information-state analysis提供了可靠的implementation基础。

#### 4.1.2 SQ2 — Traceable Information-State Transitions and Propagation

**Stage-specific transition evidence**

SQ2 首先检验 information changes 是否出现在预期的 processing stages。Table 4.RQ1-2 报告七篇 teaching materials 的非加权均值及 95% lesson-bootstrap confidence intervals，Figure 4.RQ1-1 展示 lesson-level observations 及其总体估计。

**Table 4.RQ1-2. Stage-specific information-state measures across Study 1 conditions**

| Condition | AAR, Mean [95% CI] | WMAR, Mean [95% CI] | ESR, Mean [95% CI] |
| --------- | ------------------: | -------------------: | -----------------: |
| **A0W0**  | 1.000 [1.000, 1.000] | 1.000 [1.000, 1.000] | 0.798 [0.772, 0.818] |
| **A1W0**  | 0.768 [0.749, 0.784] | 1.000 [1.000, 1.000] | 0.817 [0.797, 0.837] |
| **A0W1**  | 1.000 [1.000, 1.000] | 0.806 [0.754, 0.857] | 0.812 [0.776, 0.843] |
| **A1W1**  | 0.768 [0.750, 0.784] | 0.783 [0.699, 0.853] | 0.831 [0.806, 0.851] |

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Figure_4_Study1_Stage_Specific_Transitions.pdf

![Study 1 stage-specific information-state transitions](</Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Figure_4_Study1_Stage_Specific_Transitions.png>)

**Figure 4.RQ1-1. Stage-specific information-state transitions across the four Study 1 mechanism conditions.** Points represent individual teaching materials, diamonds represent unweighted means across the seven materials, and vertical intervals represent 95% lesson-bootstrap confidence intervals. Panel A reports Attention-stage Availability Ratio, Panel B reports Working-Memory-stage Availability Ratio, and Panel C reports Encoding Semantic Recall.

Stage-specific results 呈现出清晰的 localisation pattern。Attention OFF 时 AAR 均为 1.000，Attention ON 时均降至 0.768，且不随 WM setting 改变，说明 Attention-related loss 被稳定定位于 \(S_r\rightarrow P_{r,c}\)。相应地，WM OFF 时 WMAR 均为 1.000；WM ON 后，A0W1 和 A1W1 的 WMAR 分别降至 0.806 和 0.783，说明额外限制只出现在 \(P_{r,c}\rightarrow A_{r,c}\) transition。

四个 conditions 的 ESR 介于 0.798–0.831，confidence intervals 高度重叠。ESR means remained descriptively close across conditions, and no dedicated between-condition Encoding contrast was prespecified. The results therefore provide no evidence of a large condition-specific divergence, rather than demonstrating statistical equivalence. 因此，SQ2 的 stage-specific evidence 表明，Attention 与 WM 造成的信息变化分别出现在其预期阶段，而 shared Encoder 对实际收到的 Available Input 保持了描述上相近的 semantic correspondence。下一部分进一步检验这些局部变化是否传播至最终 Explicit LTM。

**Cumulative-propagation evidence**

SQ2 的 cumulative-propagation component 检验上述局部changes是否继续反映在Available Input，以及Source与最终Explicit LTM之间的embedding-based semantic correspondence中。Table 4.RQ1-3报告SWAR与E2ESR的七篇教材非加权均值及95% lesson-bootstrap confidence intervals，Figure 4.RQ1-2展示对应的lesson-level observations。

**Table 4.RQ1-3. Cumulative information-state outcomes across Study 1 conditions**

| Condition | SWAR, Mean [95% CI] | E2ESR, Mean [95% CI] |
| --------- | -------------------: | --------------------: |
| **A0W0**  | 1.000 [1.000, 1.000] | 0.798 [0.771, 0.818] |
| **A1W0**  | 0.768 [0.750, 0.784] | 0.638 [0.623, 0.652] |
| **A0W1**  | 0.806 [0.754, 0.859] | 0.679 [0.653, 0.708] |
| **A1W1**  | 0.601 [0.534, 0.660] | 0.522 [0.483, 0.558] |

![Study 1 cumulative information-state outcomes](Figures/Chapter4/Figure_4_Study1_Cumulative_Knowledge_State_Outcomes.png)

**Figure 4.RQ1-2. Cumulative information-state outcomes across the four Study 1 mechanism conditions.** Points represent individual teaching materials, diamonds represent unweighted means across the seven materials, and vertical intervals represent 95% lesson-bootstrap confidence intervals. Panel A reports Source-Word Availability Ratio and Panel B reports E2ESR, the embedding-based Source-to-LTM semantic-correspondence measure.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Figure_4_Study1_Cumulative_Knowledge_State_Outcomes.png

SWAR 显示出逐步累计的信息限制：A0W0 为 1.000，单独启用 Attention 或 WM 后分别降至 0.768 和 0.806，两个 mechanisms 同时启用时进一步降至 0.601。每篇教材均在数值精度范围内满足 \(SWAR=AAR\times WMAR\)，说明前一部分定位的 Attention 和 WM changes 按照既定顺序共同决定最终 Available Input。

Figure 4.RQ1-3 以绝对词数核验同一过程。四个 conditions 均从 3,719 个 frozen Source words 开始；A1W1 依次由 Attention 和 WM 移除 868 和 603 词，最终保留 2,248 词，且所有 conditions 的 available words 与两类 attributed losses 均能完整还原 source total。A1W1 的 pooled availability 为 60.4%，与 Table 4.RQ1-3 的 lesson-level mean SWAR 0.601 之间的轻微差异仅来自 aggregation level。



![Study 1 absolute Source-word decomposition](</Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Figure_4_Study1_Absolute_Source_Word_Decomposition.png>)

**Figure 4.RQ1-3. Absolute decomposition of frozen Source words across Study 1 mechanism conditions.** Each stacked bar represents the same 3,719 Source words and partitions them into words remaining in Available Input, words removed at the Attention stage, and words subsequently removed by the Working-Memory constraint. Labels report both absolute word counts and their proportions of the complete frozen Source.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Figure_4_Study1_Absolute_Source_Word_Decomposition.png

这一累计变化也反映在embedding-based Source-to-LTM correspondence中：E2ESR从A0W0的0.798降至A1W0的0.638、A0W1的0.679，并在A1W1中进一步降至0.522。结合前述ESR在四个conditions中描述上相近的结果，该E2ESR decline与upstream information availability减少的解释一致；但由于未进行专门的between-condition Encoding contrast，该结果不用于证明Encoder behaviour在不同conditions下具有统计等效性。E2ESR也未进行proposition extraction或entailment checking，因此这些数值不能证明具体命题、关系方向或限定条件在Explicit LTM中得到保留，只能表明整体contextual-embedding correspondence随上游restriction共同下降。

因此，SQ2 得到支持：Attention、WM 和 Encoding transitions 能够被分别定位，Attention 与 WM 造成的局部 information changes 又能够累计传播至 Available Input，并继续反映在最终 Explicit LTM 与完整 Source 的embedding-based semantic correspondence中。该结论不扩展为proposition-level knowledge-retention claim。


#### 4.1.3 RQ1 Summary

SQ1的实验结果显示，所有适用的implementation-fidelity measures均为1.000，且未发现mechanism violation。Attention和WM的触发、目标选择、非目标保留及FIFO-style removal均按照冻结规则执行，为后续information-state analysis建立了可靠的implementation基础。

SQ2的实验结果显示，Attention-与WM-related information loss分别被定位于\(S_r\rightarrow P_{r,c}\)和\(P_{r,c}\rightarrow A_{r,c}\)，而shared Encoder对实际Available Input的semantic correspondence在各conditions间保持描述上相近。局部changes随后累计传播：SWAR从A0W0的1.000降至A1W1的0.601，E2ESR由0.798降至0.522，表明upstream information restriction同时反映在进入Encoder的信息及Source-to-LTM的embedding-based semantic correspondence中；E2ESR不证明命题级知识保留。

据此，RQ1得到肯定回答：在冻结的实验材料、参数和操作化规则范围内，CPB processing pipeline能够按照预定义逻辑执行，并产生可归因、可定位且能够反映在Explicit LTM embedding-based semantic correspondence中的信息状态变化。该结论不表示每一条Source proposition均被保留，也不构成命题级knowledge-retention validation。

### 4.2 RQ2 — CPB versus Persona-Prompted ADHD Simulation

#### 4.2.1 SQ1 — Within-Representation Performance Differentiation

SQ1仅使用distracted materials，分别检验Prompt与CPB两种representations内部的learner levels是否形成系统性的assessment-performance differentiation。Prompt branch比较Prompt-NT、Moderate-Intensity Prompt-ADHD和High-Intensity Prompt-ADHD；CPB branch比较CPB Zero、Low、Medium和High。结果按照“performance level, run-to-run stability, response form, cross-lesson ordering, score-difference magnitude”的顺序展开。

![Study 2 SQ1 distracted-material performance differentiation](Figures/Chapter4/Study2_v2_Figure_1_SQ1_distracted_grouped_scores.png)

**Figure 4.RQ2-1. Within-representation lesson-level performance differentiation under distracted materials.** Panel A compares Prompt-NT, Moderate-Intensity Prompt-ADHD and High-Intensity Prompt-ADHD across L01–L07. Panel B compares CPB Zero, Low, Medium and High across the same teaching materials. Bars report the five-run Mean Checklist Score; both panels display the same 0–10 score scale.

Source: `/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_v2_Figure_1_SQ1_distracted_grouped_scores.png`

**Table 4.RQ2-1. Mean Checklist Scores and Run SD under distracted materials**

| Learner condition | Overall Mean Checklist Score | Independent Mean Score | Integrative Mean Score | Overall Mean Question-Level Run SD |
|---|---:|---:|---:|---:|
| Prompt NT | 9.871 | 9.865 | 9.905 | 0.161 |
| Prompt ADHD — Moderate | 9.864 | 10.000 | 9.048 | 0.000 |
| Prompt ADHD — High | 9.837 | 9.984 | 8.952 | 0.129 |
| CPB Zero | 9.374 | 9.730 | 7.238 | 0.262 |
| CPB Low | 6.517 | 6.635 | 5.810 | 1.967 |
| CPB Medium | 4.680 | 4.476 | 5.905 | 2.388 |
| CPB High | 3.014 | 2.770 | 4.476 | 1.853 |

Figure 4.RQ2-1与Table 4.RQ2-1共同显示，两种representations形成了不同的组内得分模式。Prompt-NT、Moderate-Intensity Prompt-ADHD和High-Intensity Prompt-ADHD在L01–L07中的柱形几乎重叠，各教材均值均介于9.429和10.000之间；其Overall Mean Checklist Scores分别为9.871、9.864和9.837，最高与最低条件仅相差0.034分。因此，Prompt learners普遍接近量表上限，persona intensity未形成具有明显幅度且跨教材一致的performance differentiation。相比之下，CPB Zero、Low、Medium和High在每篇教材中均保持逐级下降，其Overall means也依次由9.374降至6.517、4.680和3.014，Zero与High相差约6.36分，显示constraint severity对应了清晰且跨教材一致的graded performance pattern。

两种方法的绝对得分还受到answer information source差异的影响：Prompt learners回答时能够访问完整的累积课堂上下文，而CPB learners只能依赖经过Attention、WM与Encoding stages后形成的显式记忆，未被处理或保留的信息不能在回答阶段重新访问。因此，Prompt的ceiling pattern可能部分反映完整上下文的持续可用性，CPB得分则同时反映显式记忆表示及不同constraint levels造成的信息损失。

Table 4.RQ2-1同时显示，三个Prompt conditions在五次运行中均具有较低的Overall Mean Question-Level Run SD：Prompt-NT、Moderate-Intensity Prompt-ADHD和High-Intensity Prompt-ADHD分别为0.161、0.000和0.129。然而，这种低波动应与Prompt conditions的ceiling pattern联合解释：三个conditions的Mean Checklist Scores均接近10分，留给分数变化的空间有限。Prompt learners较低的Overall Mean Question-Level Run SD据此说明其观测得分高度重复，但不能单独证明persona simulation具有更强的行为稳定性。

CPB Zero的Overall Mean Question-Level Run SD同样较低，为0.262；加入processing constraints后，CPB Low、Medium和High则分别上升至1.967、2.388和1.853，表明受约束conditions产生了更明显的run-to-run score variability。该指标并不随constraint severity严格单调增加，Medium最高而High低于Low和Medium。Medium较高的SD与Attention trigger在\(p=0.50\)时具有最大的Bernoulli variance，以及其居中的WM capacity threshold一致；但当前分析没有分离两项机制对variability的独立贡献，也不将这一描述性对应解释为Medium最高SD的已验证因果机制。总体而言，SD在此仅描述重复运行稳定性，不作为performance ordering或ADHD-mechanism fidelity的直接指标。

![Study 2 SQ1 Mean Answer Words under distracted materials](Figures/Chapter4/Study2_v2_Figure_SQ1_mean_answer_words_bars.png)

**Figure 4.RQ2-2. Mean Answer Words under distracted materials.** Panel A presents Prompt NT, Moderate-Intensity Prompt-ADHD and High-Intensity Prompt-ADHD; Panel B presents CPB Zero, Low, Medium and High. Bars report Mean Answer Words for L01–L07, the overall 49-question set, and the Independent and Integrative Question subsets. Numerical labels report the corresponding means, and the vertical dashed line separates lesson-level results from summary scopes.

Source: `/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_v2_Figure_SQ1_mean_answer_words_bars.png`

Figure 4.RQ2-2显示，Prompt learners的回答总体明显长于CPB learners：三个Prompt conditions的Overall Mean Answer Words介于80.84和86.07之间，而四个CPB conditions介于33.46和43.43之间。两个representation内部均呈现随实验强度增加而回答变长的总体趋势。Prompt-NT、Moderate-Intensity Prompt-ADHD和High-Intensity Prompt-ADHD的Overall means依次为80.84、81.41和86.07，说明较高persona intensity主要伴随更长的语言输出，但NT与Moderate之间的差异很小。CPB Zero、Low、Medium和High的Overall means则依次为33.46、39.88、42.91和43.43；随着constraint severity增强，回答并未因可用记忆减少而变得更短，反而总体有所增加。

将Table 4.RQ2-1的题型得分与Figure 4.RQ2-2的回答词数联合观察，Prompt在Independent Questions中的Mean Checklist Scores为9.865、10.000和9.984，对应Mean Answer Words为68.83、74.46和79.75；回答随persona intensity变长，但得分仍集中于ceiling，未形成预期的performance gradient。Prompt在Integrative Questions中的得分为9.905、9.048和8.952，对应词数为152.86、123.11和124.00，呈现出较大的描述性得分分离。CPB在Independent Questions中的得分由9.730依次下降至6.635、4.476和2.770，而词数由27.57增加至35.12、40.02和42.05，保持了清晰的constraint-related performance gradient；Integrative Questions中的得分为7.238、5.810、5.905和4.476，词数为68.80、68.43、60.23和51.69，其中Low与Medium出现轻微得分反转。总体上，Integrative answers通常长于Independent answers，但其condition ordering较不稳定；鉴于Integrative Questions仅有7道，这些题型结果作为描述性补充，不替代lesson-level主要判断。

Table 4.RQ2-1与Figure 4.RQ2-2的联合结果不支持“回答越长便自动获得越高Checklist Score”的简单解释。CPB Zero平均仅回答33.46词，约为Prompt-NT的80.84词的41%，但其Mean Checklist Score达到9.374，与Prompt learners的9.837至9.871较为接近，说明较短回答仍可能覆盖大部分checklist criteria。与此同时，CPB从Zero到High的平均回答词数由33.46增加至43.43，而得分却由9.374下降至3.014，词数与得分的变化方向相反。这些描述性结果削弱了response verbosity能够单独解释condition-level score differences的可能性；但由于本研究未在控制回答内容后直接估计word count对Judge score的独立影响，因此不据此声称Judge对回答长度完全不敏感或已证明词数维度上的统计公平性。

**Table 4.RQ2-2. Lesson- and question-level OCR and Complete Equality Rate under distracted materials**

| Representation | Lesson OCR | Lesson ER | Question OCR | Question ER |
|---|---:|---:|---:|---:|
| Prompt | 71.43% (5/7) | 42.86% (3/7) | 95.92% (47/49) | 87.76% (43/49) |
| CPB | 100.00% (7/7) | 0.00% (0/7) | 77.55% (38/49) | 6.12% (3/49) |

**Table 4.RQ2-3. Overall paired lesson contrasts**

| Representation | Contrast | Overall \(\Delta\) | 95% CI |
|---|---|---:|---:|
| Prompt | NT − Moderate | 0.007 | [−0.184, 0.204] |
| Prompt | Moderate − High | 0.027 | [0.000, 0.054] |
| Prompt | NT − High | 0.034 | [−0.156, 0.218] |
| CPB | Zero − Low | 2.857 | [1.782, 3.966] |
| CPB | Low − Medium | 1.837 | [1.401, 2.340] |
| CPB | Medium − High | 1.667 | [1.177, 2.163] |
| CPB | Zero − High | 6.361 | [5.510, 7.068] |

Table 4.RQ2-2显示，CPB在全部7篇教材中均保持Zero ≥ Low ≥ Medium ≥ High的预期顺序，Lesson OCR达到100%，说明constraint severity对应的得分方向在所有教材中一致保持；同时，Lesson ER为0，说明没有任何一篇教材的四个CPB levels完全同分。因此，CPB的高OCR并非由non-strict ordering中的ties造成，而是不同constraint levels实际拉开了得分差距，形成稳定且清晰的跨教材梯度结构。相比之下，Prompt的Lesson OCR仅为71.43%，且Lesson ER达到42.86%，即3/7篇教材中的三个Prompt conditions完全同分，表明persona intensity既未在全部教材中保持预期顺序，也不能稳定形成可辨识的等级分离。

Question-level results进一步揭示了两种方法的不同模式：CPB有38/49道题满足预期排序，Question OCR为77.55%，意味着其余11道题存在局部次序偏离，因此High constraint学生在每一道题上的得分并不必然低于较低constraint levels。不过，这些单题波动在lesson aggregation后仍形成100%的跨教材梯度。Prompt则有47/49道题满足non-increasing ordering，表面上具有更高的Question OCR，然而其中87.76%的题目在三个conditions上完全同分，因此这种高question-level ordering并未转化为lesson-level或overall performance上的明显等级差异。换言之，CPB虽然在单题层面存在stochastic reversals，聚合后却形成了实际分离的稳定梯度；Prompt虽然在单题层面呈现较高的ordering consistency，但该结果主要由完全同分构成，聚合后仍未形成可辨识的等级分离。

Table 4.RQ2-3进一步量化了ordering所对应的总体得分幅度。Prompt的三个overall paired lesson contrasts仅为0.007至0.034分，实际幅度接近于零；NT–Moderate和NT–High的95% CIs均跨越零，Moderate–High的区间下界也为零，因此没有形成清晰的等级分离。相比之下，CPB的三个相邻等级差分别为2.857、1.837和1.667分，Zero–High差异达到6.361分，所有95% CIs均完全高于零，表明不同constraint levels之间具有明确的总体得分差异。结合Table 4.RQ2-2中100%的CPB Lesson OCR和0%的Lesson ER，这一contrast pattern同时具有跨教材一致性与实际分离幅度；Prompt则未形成同等清晰的等级结构。

总体而言，SQ1显示两种representations形成了不同的组内表现模式。Prompt learners的得分普遍偏高接近满分，且不同persona intensities之间主要表现为完全同分或幅度很小且缺乏跨教材一致性的差异，没有形成清晰、稳定的assessment-performance differentiation。相比之下，CPB constraint levels在所有教材中形成了方向一致、实际分离且幅度明确的graded performance structure。尽管受约束conditions在单题和重复运行层面存在stochastic variability，但在Lesson层面汇总后表现出了清晰明显的梯度和固定模式。因此，对于SQ1的直接回答是：在distracted materials下，CPB形成了系统且可辨识的组内performance differentiation，而persona prompting未形成同等清晰的等级分离。

#### 4.2.2 SQ2 — ADHD-Theory-Consistent Process Sensitivity

SQ2从两个process-sensitive components检验两种representations是否呈现与目标ADHD-related cognitive hypotheses一致的performance pattern。Controlled-distraction component评估各learner conditions的distraction sensitivity。Processing-demand component检验42道Independent Questions的得分与source-round PDB之间的关系。

**Controlled-distraction component**

![Study 2 SQ2 Raw distraction costs](Figures/Chapter4/Study2_v2_Figure_2A_SQ2_raw_distraction_costs.png)

**Figure 4.RQ2-3. Raw distraction costs across Study 2 learner conditions.** Panel A presents Prompt NT, Moderate-Intensity Prompt-ADHD and High-Intensity Prompt-ADHD; Panel B presents CPB Zero, Low, Medium and High. Coloured bars report the overall question-level Raw distraction cost, black intervals show 95% confidence intervals, and grey points show L01–L07 lesson-level Raw costs. Positive values indicate lower performance under distracted materials. The two panels use different horizontal scales to preserve the visibility of the near-zero Prompt estimates.

Source: `/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_v2_Figure_2A_SQ2_raw_distraction_costs.png`

Raw distraction cost表示每个learner condition自身从clean到distracted materials的实际得分变化，即clean mean减去distracted mean；Additional distraction cost则进一步用target condition的Raw cost减去同一representation reference的Raw cost，用于判断target是否产生超过Prompt NT或CPB Zero的额外干扰成本。因此，Figure 4.RQ2-3描述实际的clean-to-distracted变化，Table 4.RQ2-4提供主要的representation-relative comparison。

**Table 4.RQ2-4. Representation-Relative Additional Distraction Costs**

| Representation | Target versus reference | Additional distraction cost [95% CI] | Expected-direction lesson coverage |
|---|---|---:|---:|
| Prompt | Moderate − NT | −0.068 [−0.248, 0.112] | 1/7 |
| Prompt | High − NT | −0.027 [−0.301, 0.246] | 3/7 |
| CPB | Low − Zero | 1.272 [0.713, 1.831] | 7/7 |
| CPB | Medium − Zero | 2.571 [1.789, 3.353] | 7/7 |
| CPB | High − Zero | 3.293 [2.272, 4.313] | 7/7 |

Figure 4.RQ2-3显示，Prompt NT、Moderate和High的Raw distraction costs分别为0.027、−0.041和0.000，均接近0；其confidence intervals均跨越0，且lesson-level points分布于0的两侧。Table 4.RQ2-4进一步显示，Moderate与High相对Prompt NT的Additional costs分别为−0.068和−0.027，两个95% CIs同样跨越0。这些负值表明两个Prompt ADHD conditions的得分损失并未超过Prompt NT：Moderate在distracted materials下得分轻微上升，High则几乎不变。在7篇教材中，Moderate只有1篇、High只有3篇呈现比Prompt NT更大的distraction cost。因此，在冻结题目与教材集合中，Prompt ADHD conditions既未表现出额外的distraction-associated performance loss，也没有形成跨教材一致的干扰敏感性模式。

CPB Zero的Raw distraction cost仅为0.041，其confidence interval跨越0，说明关闭processing constraints时，material condition变化几乎没有降低performance。CPB Low、Medium和High的Raw costs则分别为1.313、2.612和3.333分，且对应lesson-level points均位于正向，表明受约束conditions在distracted materials下出现了随constraint severity扩大的performance decline。相对于CPB Zero，三个conditions的Additional costs仍依次达到1.272、2.571和3.293分，95% CIs在冻结题目集合中均完全高于0，并在全部7篇教材中保持预期方向。因此，这一pattern并非基础模型对material condition变化的共同反应，而是与CPB constraints的联合启用及强度相关。CPB由此形成了幅度明确、随severity增强且跨教材一致的distraction-associated performance pattern，而Prompt persona intensity没有形成相应模式；该结果不用于分离Attention与WM各自的独立因果贡献。完整的clean/distracted means与Raw costs见Appendix Table 4.2.2A.1。

**Processing-demand component**

![Study 2 SQ2 clean and distracted PDB performance profiles](Figures/Chapter4/Study2_v2_Figure_4_SQ2_combined_pdb_profiles.png)

**Figure 4.RQ2-4. Clean- and distracted-material PDB–performance profiles.** Points report five-run question-level Mean Checklist Scores for the 42 Independent Questions; lines show fitted linear relationships between source-round Processing Demand Bits and performance. Panels A and B present the Prompt conditions under clean and distracted materials, respectively; Panels C and D present the corresponding CPB conditions.

Source: `/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_v2_Figure_4_SQ2_combined_pdb_profiles.png`

Figure 4.RQ2-4检验performance是否随source-round PDB增加而下降。Clean-material Panels A和C构成主要证据：三个Prompt conditions均接近ceiling且拟合线近似水平，CPB Zero也未呈现明显关系，而CPB Low、Medium和High均表现为PDB越高、得分越低。因此，清晰的负向PDB–performance relationship只在启用processing constraints后出现。

Distracted-material Panels B和D呈现相同的方向性对照：Prompt拟合线仍近似水平，受约束CPB conditions仍呈负向关系，但question-level scores更加分散。

**Table 4.RQ2-5. Primary clean-material PDB–performance estimates**

| Learner | Slope per 100 bits | Slope 95% CI | Reference-adjusted slope contrast | Reference-adjusted 95% CI | Spearman \(\rho\) |
|---|---:|---:|---:|---:|---:|
| Prompt NT | 0.135 | [−0.011, 0.281] | 0.000 (reference) | — | 0.360 |
| Prompt ADHD — Moderate | 0.023 | [−0.026, 0.073] | −0.112 | [−0.368, 0.049] | 0.166 |
| Prompt ADHD — High | 0.018 | [−0.132, 0.169] | −0.116 | [−0.421, 0.116] | −0.007 |
| CPB Zero | −0.022 | [−0.293, 0.249] | 0.000 (reference) | — | −0.050 |
| CPB Low | −2.217 | [−3.272, −1.163] | −2.196 | [−3.024, −1.023] | −0.441 |
| CPB Medium | −2.748 | [−3.949, −1.548] | −2.727 | [−3.832, −1.642] | −0.499 |
| CPB High | −2.355 | [−3.753, −0.958] | −2.333 | [−3.495, −1.115] | −0.410 |

Table 4.RQ2-5首先通过clean-material PDB–score slopes及其95% confidence intervals量化各learner condition的processing-demand sensitivity。Prompt NT、Moderate和High的slopes分别为0.135、0.023和0.018分/100 bits，三个intervals均包含0，因此未观察到明确的负向关系。CPB Zero的slope同样接近0，为−0.022，且interval包含0。相比之下，CPB Low、Medium和High的slopes分别为−2.217、−2.748和−2.355分/100 bits，三个intervals均完全低于0，表明启用processing constraints后，higher PDB与较低performance之间形成了清晰的负向关系。三种受约束conditions均表现出该sensitivity，但slope幅度没有随Low至High严格单调增强，Medium的负向estimate最大。

Reference-adjusted slope contrasts进一步检验上述关系是否超过同representation reference的基础趋势。Prompt Moderate和High相对Prompt NT的contrasts为−0.112和−0.116分/100 bits，但两个95% CIs均包含0，说明其轻微的负向偏移无法与无额外效应清晰区分。CPB Low、Medium和High相对CPB Zero的contrasts分别为−2.196、−2.727和−2.333，且相应CIs均完全低于0，确认其负向PDB–performance relationships并非CPB Zero或基础模型的共同趋势。

Spearman \(\rho\)提供了不依赖线性假设的支持性检查。Prompt conditions与CPB Zero未呈现一致的负向单调关系，而CPB Low、Medium和High的\(\rho\)分别为−0.441、−0.499和−0.410，与raw slopes的方向一致。结合Figure 4.RQ2-4，clean-material结果因此表明，CPB而非Prompt在该冻结任务中形成了可辨识且超过representation-specific reference的processing-demand sensitivity。

综合两类证据，SQ2显示Prompt ADHD conditions既未相对Prompt NT形成额外且跨教材一致的distraction cost，也未呈现明确的负向PDB–performance relationship。相比之下，三种受约束CPB conditions均相对CPB Zero产生了额外distraction cost，并在clean materials下随PDB增加呈现明确的performance decline。因此，在本研究的冻结任务中，CPB比persona prompting更一致地表现出与目标ADHD-related Attention和Working-Memory hypotheses方向相符的behavioural process sensitivity。

#### 4.2.3 RQ2 Summary

SQ1的实验结果显示，persona prompting与CPB形成了不同的within-representation performance structure。三个Prompt conditions的得分普遍接近ceiling，ordering主要由完全同分或幅度极小的差异构成，未形成清晰且跨教材一致的persona-intensity differentiation。相比之下，CPB Zero、Low、Medium和High在全部七篇教材中均保持预期的graded ordering，Lesson ER为0，且相邻与端点contrasts均呈现明确的实际得分分离。

SQ2的实验结果显示，Prompt ADHD conditions既未相对Prompt NT产生额外且跨教材一致的distraction cost，也未形成稳定的negative PDB–performance relationship。CPB Low、Medium和High则均相对CPB Zero表现出正向的Additional distraction cost，并在全部七篇教材中保持预期方向。clean-material analysis同时显示，三种受约束CPB conditions均形成超过CPB Zero基础趋势的negative PDB–performance relationship。由于CPB severity同时改变Attention probability与WM capacity，这些结果支持两类process-sensitive evidence的共同方向，而不分离两项机制各自的独立因果贡献。

据此，RQ2得到肯定但限于任务范围的回答：在冻结的材料、问题与操作化条件下，CPB比persona prompting更一致地表现出与目标ADHD-related attentional distractibility和working-memory processing constraints方向相符的learning behaviour。需要强调的是，CPB Zero、Low、Medium和High是由预先设定的Attention trigger probability与WM capacity参数构成的实验约束梯度，用于检验模型对不同processing constraints的行为响应，并不代表经过临床校准的ADHD严重程度。因此，该结论支持的是冻结任务中的task-specific behavioural consistency，而不将参数等级、模拟得分或观察到的process sensitivity等同于真实ADHD learners的症状程度、认知机制或总体学习表现。

### 4.3 RQ3 — Multidimensional Representation Performance

#### 4.3.1 SQ1 — Baseline-Relative Behavioural Change

SQ1仅使用distracted materials，检验A1–B2 profile dimensions加入后，各learner conditions相对于matched Study 2 baselines的behavioural outcomes如何变化，以及两种representations原有的within-representation performance structure是否仍然能够识别。本节首先使用具体learner-condition结果定位overall score changes的来源。run SD和Mean Answer Words用于补充描述stability与response form，最后结合Lesson/Question OCR、ER和实际score separation判断performance structure的保持情况。按representation与profile汇总的Mean Checklist Score、Overall Mean Question-Level Run SD和Mean Answer Words，以及各指标的matched Study 2 baseline和delta，集中报告于Appendix Table 4.3.1A.1。

![Study 3 SQ1 distracted-material Mean Checklist Score change](Figures/Chapter4/Study3_v3_Figure_1_SQ1_distracted_mean_score_delta.png)

**Figure 4.RQ3-1. Learner-condition-specific Mean Checklist Score change relative to matched Study 2 distracted-material baselines.** Panel A presents Moderate- and High-Intensity Prompt-ADHD learners; Panel B presents CPB Low, Medium and High. A1–B2 define the four additional attribute profiles. Each bar reports the Overall Mean Checklist Score delta, calculated as Study 3 minus the matched Study 2 learner-condition value. Positive values indicate higher Study 3 performance and negative values indicate lower performance. The panels use profile-appropriate y-axis ranges; exact deltas are labelled on the bars.

Source: `/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study3_v3_Figure_1_SQ1_distracted_mean_score_delta.png`

Figure 4.RQ3-1比较两种Prompt-ADHD conditions和三种CPB constraint conditions分别加入A1、A2、B1与B2四种attribute profiles后，相对于matched Study 2 distracted-material baselines的Overall Mean Checklist Score变化，并用于判断同一profile的影响是否跨learner conditions共同出现，或主要来自某个具体condition。相应的representation-level profile summaries见Appendix Table 4.3.1A.1。总体来看，新增profile dimensions对Prompt与CPB并未产生一致影响；即使加入完全相同的A1–B2属性组合，两种representations也可能呈现方向不同的score displacement，其中A2和B2的差异最为明显。

A组由Language Ability与Big-Five composite方向一致的两个aligned profiles组成。**A1 — Learning-Congruent Alignment**结合High Language Ability与High O、High C、Low N。该profile对两种representations的影响均较有限：Prompt Moderate基本不变（+0.014），Prompt High轻微下降（−0.177）；CPB Low和Medium轻微提高（+0.197和+0.082），CPB High轻微下降（−0.088）。在representation层级，Prompt与CPB的平均变化分别仅为−0.082和+0.063，整体均接近matched Study 2 baselines。相比之下，**A2 — Learning-Challenging Alignment**结合Low Language Ability与Low O、Low C、High N，并在两种representations中产生了明显不同的结果。Prompt Moderate和High均下降约0.952分，呈现高度一致的负向变化；CPB Low、Medium和High则分别提高0.544、0.231和0.265分，representation-level平均变化为+0.347。由此，aligned profiles并未形成跨representation一致的performance effect：Learning-Congruent Alignment仅引起有限变化，而Learning-Challenging Alignment在Prompt中产生了最明显的performance decline，却没有在CPB中产生相应下降。这表明相同的challenging profile cues如何进入最终assessment performance，取决于其与基础learner representation的结合方式。

B组由Language Ability与Big-Five composite方向冲突的两个profiles组成。**B1 — High Language / Learning-Challenging BF**结合High Language Ability与Low O、Low C、High N。Prompt Moderate和High均下降约0.388分；CPB Low、Medium和High分别变化−0.088、+0.054和−0.177，整体更接近matched baseline。相应的representation-level平均变化为Prompt −0.388和CPB −0.070。**B2 — Low Language / Learning-Congruent BF**结合Low Language Ability与High O、High C、Low N。该profile下，Prompt Moderate和High分别下降0.551和0.857分，而CPB Low、Medium和High分别提高0.646、0.456和0.571分，形成Prompt −0.704与CPB +0.558的representation-level反向变化。交叉比较进一步显示，A1与B2具有相同的Learning-Congruent BF但采用不同Language Ability，Prompt由接近baseline转为明显下降；A2与B1具有相同的Learning-Challenging BF，High Language Ability则对应较小的Prompt下降幅度。因此，Prompt branch的Mean Checklist Score变化更明显地随Language Ability方向改变。CPB没有呈现相同模式：两个Low Language profiles A2和B2均产生正向score displacement，说明Language Ability对得分的影响并非跨representation通用，而受到representation architecture及其与新增profile cues交互方式的调节。

总体而言，A1–B2 additions确实改变了assessment performance，但两种representations呈现不同的变化模式。Prompt的score displacement总体以负向为主，且A2和B2两个Low Language profiles下降最明显；CPB则多为接近baseline或正向变化。然而，Mean Checklist Score delta仅描述performance displacement，不能单独判断原有within-representation structure是否保持，也不能说明变化是否来自run-to-run stability或response form。Figure 4.RQ3-2和Figure 4.RQ3-3因此进一步考察Overall Mean Question-Level Run SD与Mean Answer Words的baseline-relative changes，随后再通过OCR/ER和score separation判断原有performance structure是否仍然可识别。



![Study 3 SQ1 distracted-material run SD change](Figures/Chapter4/Study3_v3_Figure_2_SQ1_distracted_run_sd_delta.png)

**Figure 4.RQ3-2. Change in Overall Mean Question-Level Run SD relative to matched Study 2 distracted-material baselines.** Bars report Study 3 minus Study 2 run-SD values for each learner-condition × profile cell. Positive values indicate greater run-to-run score variability after profile addition, whereas negative values indicate more concentrated repeated-run outcomes. Panel-specific y-axis ranges are used to keep the within-representation differences legible.

Source: `/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study3_v3_Figure_2_SQ1_distracted_run_sd_delta.png`

Figure 4.RQ3-2比较两种Prompt-ADHD conditions和三种CPB constraint conditions分别加入A1–B2后，Overall Mean Question-Level Run SD相对于matched Study 2 baselines的变化。Prompt的八个condition × profile combinations均呈正向SD delta，说明profile additions普遍增加了重复运行的得分波动；CPB则以正向变化为主，但A1和B1下的High condition略有下降。不同profiles的影响也不相同：A2对Prompt的variability影响最大，而B2在CPB中产生了最一致的SD increase。

在aligned A组中，**A1 — Learning-Congruent Alignment**仅引起较小变化，Prompt的representation-level SD增加0.082，CPB基本不变（−0.004）。**A2 — Learning-Challenging Alignment**则使Prompt Moderate和High的SD分别增加0.553和0.492，并使CPB Medium和High分别增加0.353和0.265，表明该challenging configuration明显降低了重复运行结果的集中程度。在conflicting B组中，B1的总体变化较小；**B2 — Low Language / Learning-Congruent BF**则使五种learner conditions的SD全部上升，其中CPB的representation-level增幅达到0.298。结合A1与B2、A2与B1的对应比较，Low Language Ability profiles总体伴随更大的run-to-run variability，但具体幅度仍受到Big-Five组合与representation architecture的共同影响。



![Study 3 SQ1 distracted-material Mean Answer Words change](Figures/Chapter4/Study3_v3_Figure_3_SQ1_distracted_answer_words_delta.png)

**Figure 4.RQ3-3. Change in Mean Answer Words relative to matched Study 2 distracted-material baselines.** Bars report Study 3 minus Study 2 Mean Answer Words for each learner-condition × profile cell. Positive values indicate longer Study 3 responses and negative values indicate shorter responses. Panel-specific y-axis ranges are used because Prompt and CPB changes differ substantially in magnitude.

Source: `/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study3_v3_Figure_3_SQ1_distracted_answer_words_delta.png`

Figure 4.RQ3-3比较两种Prompt-ADHD conditions和三种CPB constraint conditions分别加入A1–B2后，Mean Answer Words相对于matched Study 2 baselines的变化。新增profiles对Prompt回答长度产生了幅度更大且方向更明确的影响：各cell的变化约介于增加6.3词至减少50.6词之间，其中两个Low Language profiles均导致回答大幅缩短。相比之下，CPB各cell始终保持在约−5至+5词的较窄范围内。由此可见，A1–B2对response length的影响主要集中于Prompt branch，并主要随Language Ability方向变化；相同profile cues对memory-constrained CPB回答长度的影响明显较弱。

在aligned A组中，**A1 — Learning-Congruent Alignment**使两个Prompt conditions均增加约6.3词，CPB三个conditions平均增加3.1词；**A2 — Learning-Challenging Alignment**则使Prompt Moderate和High分别减少44.1和50.6词，而CPB平均仍增加2.0词，形成明显的representation-specific divergence。在conflicting B组中，High Language的B1仅使回答小幅缩短；Low Language的**B2 — Low Language / Learning-Congruent BF**则使Prompt Moderate和High分别减少41.8和49.9词，而CPB三个conditions平均仅减少约4.7词。跨profile比较显示，无论Big-Five composite是Learning-Challenging还是Learning-Congruent，A2与B2两个Low Language profiles均使Prompt回答缩短约46–47词；A1与B1两个High Language profiles则只产生有限变化。因此，Prompt回答长度主要响应显式Language Ability cue，而CPB回答受Explicit LTM及memory-restricted answering procedure约束，对相同cue的长度变化明显收窄。

将Figure 4.RQ3-3与得分结果联合观察，Prompt A2和B2的明显缩短同时伴随Mean Checklist Score下降，但回答长度并不能单独解释全部performance change：Prompt A1在回答变长后得分基本不变，而CPB B2在回答缩短的同时得分反而提高。因此，Mean Answer Words在此仅用于说明新增profiles如何改变response form，不被解释为knowledge gain、learning effectiveness或profile fidelity。完整representation-level absolute values与deltas见Appendix Table 4.3.1A.1。

**Table 4.RQ3-1. Profile-specific Lesson/Question OCR and Complete Equality Rate under distracted materials**

| Representation | Profile | Lesson OCR | Δ Lesson OCR | Lesson ER | Δ Lesson ER | Question OCR | Δ Question OCR | Question ER | Δ Question ER |
|:---|:---|:---|---:|:---|---:|:---|---:|:---|---:|
| Prompt | A1 | 85.71% (6/7) | −14.29 pp | 42.86% (3/7) | −28.57 pp | 97.96% (48/49) | −2.04 pp | 87.76% (43/49) | −6.12 pp |
| Prompt | A2 | 57.14% (4/7) | −42.86 pp | 0.00% (0/7) | −71.43 pp | 83.67% (41/49) | −16.33 pp | 57.14% (28/49) | −36.73 pp |
| Prompt | B1 | 71.43% (5/7) | −28.57 pp | 14.29% (1/7) | −57.14 pp | 95.92% (47/49) | −4.08 pp | 85.71% (42/49) | −8.16 pp |
| Prompt | B2 | 100.00% (7/7) | +0.00 pp | 14.29% (1/7) | −57.14 pp | 97.96% (48/49) | −2.04 pp | 81.63% (40/49) | −12.24 pp |
| CPB | A1 | 100.00% (7/7) | +0.00 pp | 0.00% (0/7) | +0.00 pp | 83.67% (41/49) | +4.08 pp | 22.45% (11/49) | +0.00 pp |
| CPB | A2 | 100.00% (7/7) | +0.00 pp | 0.00% (0/7) | +0.00 pp | 71.43% (35/49) | −8.16 pp | 12.24% (6/49) | −10.20 pp |
| CPB | B1 | 100.00% (7/7) | +0.00 pp | 0.00% (0/7) | +0.00 pp | 73.47% (36/49) | −6.12 pp | 20.41% (10/49) | −2.04 pp |
| CPB | B2 | 100.00% (7/7) | +0.00 pp | 0.00% (0/7) | +0.00 pp | 71.43% (35/49) | −8.16 pp | 14.29% (7/49) | −8.16 pp |

Table 4.RQ3-1以Lesson OCR/ER作为主要performance-structure evidence。CPB在A1–B2四种profiles下均有7/7篇教材保持Low \(\ge\) Medium \(\ge\) High的预期顺序，Lesson OCR均为100%，且Lesson ER均为0。两项指标相对于matched Study 2 baseline均没有变化，说明新增Language Ability与Big-Five profiles后，CPB仍在全部教材上保持实际拉开差距的graded structure，而不是依靠完全同分满足non-strict ordering。Prompt的Lesson OCR则随profile变化：A1、A2和B1分别只有6/7、4/7和5/7篇教材保持Moderate \(\ge\) High，B2达到7/7；其中A2的Lesson OCR下降至57.14%，表明新增profiles后Prompt ordering在宏观教材层面并不稳定。Prompt Lesson ER虽然普遍低于Study 2 baseline，但这不自动代表形成了更清晰的预期分离。例如A2的Lesson ER降至0时，Lesson OCR也同时降至57.14%，说明原有ties的一部分被打破后形成的是directional reversals，而非一致的Moderate–High separation。

Question-level results进一步揭示了lesson aggregation内部的差异。Prompt在四种profiles下仍有41–48/49道题满足non-increasing ordering，Question OCR为83.67%–97.96%，表面上比CPB的71.43%–83.67%更稳定；但Prompt同时有28–43/49道题在Moderate与High下完全同分，Question ER高达57.14%–87.76%。因此，其较高Question OCR在很大程度上表示两个Prompt conditions在单题上没有产生可辨识的performance difference，而不代表更强的persona-intensity differentiation。CPB的Question OCR相对较低，说明High constraint在个别题目上并不总是稳定低于Medium或Low；但其Question ER仅为12.24%–22.45%，且这些item-level stochastic reversals在按教材聚合后均转化为100% Lesson OCR和0 Lesson ER。

换言之，Prompt在单题层面具有更高的表面ordering coverage，却主要由大量完全同分构成，并且这种pattern未稳定转化为跨教材的Moderate–High separation。CPB在微观题目层面存在更多局部波动，但在宏观lesson level保持了跨四种profiles一致且具有实际分离的constraint gradient。Appendix Table 4.3.1A.2进一步量化了对应的实际分差：Prompt Moderate–High separation在四种profiles下仅为0.027–0.333分；CPB所有相邻等级分差均保持为正，介于1.551–2.150分，Low–High separation则保持在3.578–3.789分。因此，CPB的100% Lesson OCR和0 Lesson ER对应了幅度明确的graded separation，而Prompt ordering仍主要表现为有限的performance differentiation。

To sum up，A1–B2 profile additions改变了两种representations的assessment behaviour，但影响方式不同。Prompt的得分总体下降，尤其集中于A2和B2两个Low Language profiles，并伴随更高的run-to-run variability及明显缩短的回答。其原有limited differentiation仍然存在，且Moderate–High ordering随profile变化并继续包含大量question-level ties。CPB的总体得分则多为接近或高于matched baseline，response-length变化相对有限。尽管单题层面仍有局部reversals，Low、Medium和High在四种profiles下均保持100% Lesson OCR、0 Lesson ER及幅度明确的score separation。因此，SQ1的结果表明，新增Language Ability与Big-Five dimensions能够显著改变具体outcomes和response form，但没有消除CPB在Study 2中形成的graded within-representation performance structure。相比之下，Prompt branch仍主要表现为较弱且更受profile组合影响的performance differentiation。

#### 4.3.2 SQ2 — Retention of Constraint-Related Process Patterns

SQ2沿用Study 2的两个process-sensitive components。Controlled-distraction component使用全部49道题，检验A1–B2下各learner condition从clean到distracted materials的Raw distraction cost；processing-demand component使用42道Independent Questions，以clean-material PDB–performance relationship为主要证据，并以distracted-material profiles作方向性检查。

**Controlled-distraction component**


![Study 3 SQ2 Raw distraction costs](Figures/Chapter4/Study3_v3_Figure_5_SQ2_raw_distraction_costs_bars_only.png)


**Figure 4.RQ3-4. Raw distraction costs across multidimensional Study 3 learner profiles.** Panel A presents Moderate- and High-Intensity Prompt-ADHD learners; Panel B presents CPB Low, Medium and High. A1–B2 define the four additional attribute profiles. Coloured bars report the overall question-level Raw distraction cost and black intervals show 95% confidence intervals. Positive values indicate lower performance under distracted materials. Panel-specific vertical scales preserve the visibility of the near-zero Prompt estimates.

Source: `/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study3_v3_Figure_5_SQ2_raw_distraction_costs_bars_only.png`

Figure 4.RQ3-4显示，八个Prompt condition × profile cells的Raw distraction costs介于−0.299至0.231分。这里的正值表示distracted得分低于clean，而负值则表示加入干扰后得分反而提高。具体而言，A2 Moderate、A2 High和B1 Moderate的Raw costs分别为−0.027、−0.299和−0.177分，即这三组Prompt-ADHD learners在distracted materials下的平均得分略高于clean materials；其余组合的得分下降也仅为0.041–0.231分。所有95% confidence intervals均跨越0，说明无论是轻微下降还是反向提高，现有数据都不能将这些变化与0清晰区分。Appendix Table 4.3.2A.1进一步显示，每个cell仅有2–3篇教材呈现正向cost。因此，在加入Language Ability与Big-Five dimensions后，Prompt-ADHD不仅没有表现出稳定的distraction-associated performance loss，部分profile组合还出现了“有干扰反而得分更高”的反向结果，且整体方向在不同教材间不一致。

CPB呈现了明显不同的pattern。四种profiles下，Low的Raw costs为0.912–1.347分，Medium为2.129–2.531分，High为2.810–3.286分，意味着全部12个CPB condition × profile组合在加入干扰后都出现了明确的得分下降。这些95% confidence intervals均完全高于0，且每个组合在全7篇教材中均呈现正向cost，说明该下降既能与0清晰区分，也不是由少数教材驱动。更重要的是，A1–B2的所有profiles都保持Low < Medium < High的distraction-cost梯度：constraint severity越高，distracted materials造成的performance loss越大。因此，额外profile dimensions虽然改变了具体effect magnitude，却没有消除CPB在Study 2中观察到的controlled-distraction sensitivity；这与Prompt branch中接近0、方向不稳定且部分反转的结果形成了清晰对照。完整估计值、confidence intervals及lesson coverage见Appendix Table 4.3.2A.1。

**Processing-demand component**

![Study 3 SQ2 clean-material PDB performance profiles](Figures/Chapter4/Study3_v3_Figure_6_SQ2_clean_pdb_profiles.png)

**Figure 4.RQ3-5. Clean-material PDB–performance profiles across multidimensional Study 3 learners.** Points report five-run question-level Mean Checklist Scores for the 42 Independent Questions; lines show fitted linear relationships between source-round Processing Demand Bits and performance. Panels A–D present Prompt Moderate and High under A1–B2; Panels E–H present CPB Low, Medium and High under the same profiles. Clean materials constitute the primary PDB analysis.

Source: `/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study3_v3_Figure_6_SQ2_clean_pdb_profiles.png`

Figure 4.RQ3-5显示，Prompt conditions在A1–B2下仍主要集中于较高得分区间，拟合线近似水平或向上，没有呈现PDB越高、performance越低的系统性关系。CPB Low、Medium和High则在四种profiles下均呈负向拟合线，表明higher source-round PDB仍与lower question performance相关。该representation-level对照在所有A1–B2 profiles中均可辨识，但不同profile下的负向幅度有所变化。

Appendix Table 4.3.2A.2量化了Figure 4.RQ3-5中的主要clean-material relationships。Prompt的八个slopes介于−0.052至0.627分/100 bits，没有任何condition呈现95% CI完全低于0的negative slope；相应Spearman \(\rho\)也除A1 Moderate外均为正。因此，新增profiles没有使Prompt learners形成与higher processing demand相关的系统性performance decline，A2 Moderate和B2 High反而呈现明确的正向slope。

CPB的12个slopes全部为负，介于−2.713至−1.103分/100 bits，其中9个95% CIs完全低于0；A2 Low、A2 High和B2 High的intervals跨越0，但其point estimates及Spearman \(\rho\)仍保持负向。四种profiles下的全部CPB \(\rho\)均为负，范围为−0.484至−0.205，与linear slopes的总体方向一致。A1与B1的负向关系整体强于A2与B2，说明新增profile dimensions能够改变processing-demand effect magnitude，但没有反转CPB的representation-wide negative association。

在Appendix Figure 4.3.2A.1中，Distracted-material profiles提供了相同方向的支持性检查：Prompt的八个slopes均为正，仍未呈现PDB越高、performance越低的系统性关系；CPB的12个condition × profile slopes则全部保持负向。与对应的clean-material estimates相比，其中11/12个CPB slopes的绝对值减小，只有A2 Medium的负向slope略微增强，说明加入外部干扰后该relationship的幅度通常减弱，但方向没有反转。

To sum up，SQ2在两类process-sensitive evidence上呈现一致的描述性结果。A1–B2 Prompt learners既未表现出明确且跨教材一致的Raw distraction cost，也未形成negative PDB–performance relationship；CPB learners则在全部profiles和constraint levels下保持正向且跨7篇教材一致的distraction cost，并在clean materials下普遍呈现PDB越高、performance越低的关系。这些结果表明，加入response-stage attribute prompts后，Study 2中观察到的CPB constraint-related aggregate patterns仍然可见；它们不验证完整multidimensional fidelity，也不证明Big-Five attributes本身得到忠实表达。

#### 4.3.3 RQ3 Summary

RQ3 first examined how response-stage Language Ability and Big-Five prompt additions changed assessment outcomes. The A1–B2 profiles produced clear profile-dependent changes in both representations. In the Prompt branch, Mean Checklist Score, run-to-run variability and response length varied more visibly across profiles, with A2 and B2 showing particularly large reductions in score and response length. CPB absolute outcomes also changed across profiles, confirming that response-stage attributes could influence how the same learned information was expressed in assessment answers.

The second part of RQ3 examined whether CPB's previously established constraint-related aggregate patterns remained observable despite these outcome changes. Across all A1–B2 profiles, CPB Low, Medium and High retained 100% Lesson OCR, 0 Lesson ER and clear score separation, preserving the graded within-representation performance structure. The same profiles also retained positive distraction costs across all seven lessons and continued to show the overall relationship between higher source-round PDB and lower performance under clean materials. Although the magnitude of these effects varied across profiles, their direction and aggregate structure were not reversed.

Taken together, RQ3 shows that **response-stage learner-profile additions changed assessment outcomes without eliminating the constraint-related aggregate patterns previously established by CPB**. In other words, individual outputs remained responsive to the added profile dimensions, while the higher-level graded performance structure and sensitivity to controlled distraction and instructional processing demand remained observable.

These findings support the retention of CPB's constraint-related aggregate patterns under response-stage attribute additions. However, because Study 3 did not independently evaluate the linguistic or personality fidelity of the added Language Ability and Big-Five prompts, the results should not be interpreted as evidence of complete multidimensional learner fidelity or overall superiority over joint persona prompting.

### 4.4 Summary of Findings and Discussion





