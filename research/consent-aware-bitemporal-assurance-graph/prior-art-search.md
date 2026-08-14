# Prior-art search record

Version: 0.1.0

Status: author search, independent review required

Searched: 2026-08-14

## Scope

This record tests whether the candidate contribution has already been
disclosed. It is not a legal opinion, patentability search or systematic
review. The author search covers standards, peer-reviewed healthcare systems,
computer-science papers, preprints and patent documents in English. An
independent researcher and qualified legal reviewer must extend it before any
novelty, priority or patentability statement.

## Candidate boundary searched

The searched contribution is not a graph, provenance record, Consent model,
bitemporal store, assurance case or executable test by itself. The candidate is
the following method:

1. construct a historical graph view from separate effective-time and
   recorded-time cutoffs;
2. evaluate a purpose- and tenant-bound Consent decision within that view;
3. reconstruct one complete path through the responsible typed capability,
   control owner, contract operation and executable evidence;
4. return `deny` or `unresolved` when a required historical or assurance link
   is absent; and
5. expose only the minimum permitted result while recording omissions.

## Sources and query families

The author searched PubMed, ACM Digital Library, IEEE Xplore, arXiv, standards
sites and Google Patents using combinations of:

- `healthcare consent provenance graph temporal`;
- `bitemporal consent provenance healthcare`;
- `assurance case healthcare provenance consent`;
- `dynamic assurance case temporal evidence graph`;
- `purpose based consent healthcare audit provenance`;
- `consent graph actor purpose timestamp healthcare patent`;
- `typed argument graph provenance executable evidence`; and
- the titles, authors and citations of included records.

Records were included when they disclosed at least one element of the candidate
or a close combination. Records about temporal-lobe treatment, generic graph
learning or clinical outcomes without system provenance were excluded.

## Included authorities

| Authority | What it establishes | Overlap with candidate |
| --- | --- | --- |
| [W3C PROV-O](https://www.w3.org/TR/prov-o/) | Interoperable entities, activities, agents and provenance relations | Provenance vocabulary and paths |
| [HL7 FHIR Consent](https://hl7.org/fhir/consent.html) | Purpose- and actor-aware healthcare Consent representation | Consent state and policy scope |
| [HL7 FHIR Provenance](https://hl7.org/fhir/provenance.html) | Sources, agents and activities behind healthcare resources | Healthcare provenance |
| [OMG SACM 2.0](https://www.omg.org/spec/SACM/2.0/) | Structured assurance claims, arguments and evidence | Assurance-path structure |
| [Snodgrass, TQuel](https://www2.cs.arizona.edu/~rts/pubs/TODS87.pdf) | Valid-time and transaction-time database semantics | Two-time reconstruction |
| [Temporal Provenance Model](https://arxiv.org/abs/1211.5009) | Historical provenance graphs and time-aware query mechanisms | Temporal graph reconstruction |
| [Ahmed et al. 2023](https://pubmed.ncbi.nlm.nih.gov/37514788/) | Systematic review of provenance in healthcare | Domain context and known methods |
| [Tith et al. 2020](https://pubmed.ncbi.nlm.nih.gov/33190460/) | Purpose-based Consent with updates, withdrawals and traceability | Purpose-bound healthcare Consent |
| [Benchoufi et al. 2017](https://pubmed.ncbi.nlm.nih.gov/29167732/) | Time-stamped, version-bound consent history for research | Consent history and reproducibility |
| [OntoGSN](https://arxiv.org/abs/2506.11023) | Queryable, automatically updated assurance-case graph | Dynamic assurance graph |
| [Compliance-by-Construction Argument Graphs](https://arxiv.org/abs/2604.04103) | Typed argument graph, W3C PROV ledger and deterministic validation | Evidence-linked graph and executable validation |
| [US10936732B2](https://patents.google.com/patent/US10936732B2/en) | Consent histories and provenance graphs for consent decisions and policy changes | Consent provenance and audit trail |
| [US12423467B2](https://patents.google.com/patent/US12423467B2/en) | Graph queries over healthcare consent attributes including actor, purpose, environment and time | Consent-aware graph querying |

## Current assessment

The search rejects any broad claim that Heyrafiki invented Assurance Graphs,
dynamic assurance cases, temporal provenance, purpose-based healthcare Consent,
consent-provenance graphs or executable evidence links. Those ideas have clear
prior art.

No included record has yet been shown to disclose the exact two-cutoff,
Consent-conditional assurance-path query and its fail-closed completeness
semantics as one evaluated method. Scientific priority remains an unresolved
research question. The closest records are Temporal Provenance Model, OntoGSN,
Compliance-by-Construction Argument Graphs and the two consent-graph patent
families.

## Independent review work

The independent reviewer must:

1. search Scopus, Web of Science, Google Scholar, Lens, Espacenet and WIPO
   Patentscope where access permits;
2. search forward and backward citations for every high-overlap record;
3. include non-English records and adjacent safety-case, policy-as-code,
   temporal knowledge-graph and access-control literature;
4. create a claim chart mapping every candidate element to each close record;
5. record exact queries, dates, result counts and exclusion reasons; and
6. recommend `already disclosed`, `not supported`, or `proceed to evaluation`.

Publication and patent decisions proceed after that review is signed and
versioned.
