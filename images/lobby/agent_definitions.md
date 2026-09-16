# Specialized Agents: Roles, Inputs & Outputs

This document defines the specialized agent framework for the Lobby walkthrough transformations. These agents collaborate to analyze, design, source, cost, and plan the renovation process.

---

## 🏛️ 1. Room Analysis Agent
* **Role**: Evaluates the physical space, identifies structural constraints, maps lighting directions, and documents architectural landmarks.
* **Input Parameters**:
  - `original_images`: Array of paths to the original raw photographs.
  - `spatial_nodes`: JSON coordinate mapping showing camera positions and view directions.
  - `room_dimensions`: Estimated or measured dimensions of the room layout (walls, ceiling heights).
* **Output Parameters**:
  - `structural_landmarks`: Mapping of structural pillars, doorways, stair boundaries, and display cabinets that cannot be moved.
  - `wet_zones`: Exact mapping of plumbing columns and water lines.
  - `lighting_vectors`: Angle, temperature, and intensity vector of incoming natural light.
  - `space_proportions`: Ratio of furniture volume to free walking space.

---

## 🎨 2. Interior Designer Agent
* **Role**: Translates spatial analysis and styling presets into comprehensive interior design concepts.
* **Strict Architectural Constraints**:
  - All redesigned concept proposals and rendering prompts must strictly maintain the **original room geometry**, **window placement**, **door placement**, **ceiling height**, and **camera perspective**.
  - Redevelopment scope is strictly limited to redesigning **finishes, furniture, lighting, and decor**.
* **Input Parameters**:
  - `analysis_report`: Output report from the Room Analysis Agent.
  - `style_preset`: Selected aesthetic preset (e.g., Japandi, Scandinavian, etc.).
  - `design_tier`: Selected design depth (e.g., Botanical Pathway, Modern Harmony, etc.).
* **Output Parameters**:
  - `design_concept`: Written design statement explaining the look, feel, and flow.
  - `materials_schedule`: Specific list of wall paints (HEX codes), flooring tiles, and wood veneer finishes.
  - `generation_prompts`: Structured prompts tailored for AI image generation, incorporating style guidelines.

---

## 🪑 3. Furniture Recommendation Agent
* **Role**: Researches and recommends real-world, commercially available furniture pieces, rugs, and light fixtures.
* **Input Parameters**:
  - `design_concept`: Style directives from the Interior Designer Agent.
  - `room_proportions`: Size constraints from the Room Analysis report.
  - `material_schedule`: Finish colors and textures to match.
* **Output Parameters**:
  - `furniture_spec_sheet`: Table containing furniture items, exact dimensions (width x depth x height), material finishes, and model names.
  - `sourcing_catalog`: Curated links to suppliers/shops matching real-world availability.
  - `furniture_layout_coordinates`: Recommended relative positioning of each piece on the floor plan.

---

## 💰 4. Budget Estimation Agent
* **Role**: Projects costs for materials, custom joinery, loose furniture, and contractor labor across the design tiers.
* **Input Parameters**:
  - `materials_schedule`: Finishes list from the Interior Designer.
  - `furniture_spec_sheet`: Items list from the Furniture Recommendation Agent.
  - `contractor_rate_index`: Mapped labor cost indices (plumbing, masonry, carpentry).
* **Output Parameters**:
  - `tiered_estimate`: Itemized budget table comparing costs across Decluttered Flow, Botanical Pathway, Refined Hearth, Modern Harmony, and Walnut & Marble Grandeur.
  - `cost_breakdown`: Relative percentages of cost allocated to Materials vs. Labor vs. Furniture.
  - `contingency_ledger`: Standard construction contingency buffers (typically 10-15%).

---

## 📅 5. Renovation Planner Agent
* **Role**: Sequences work milestones, coordinates trade schedules, and outlines inspection check-gates.
* **Input Parameters**:
  - `selected_tier`: The chosen design tier and design details.
  - `structural_landmarks`: Mapping of structural and wet zones.
  - `budget_allocation`: Total timeline and budget constraints.
* **Output Parameters**:
  - `project_schedule`: Phase-by-phase project timeline (e.g., Preparation, Plumbing/Electrical, Masonry, Carpentry, Finishing).
  - `trade_sequence`: Logical sequencing of subcontractors to prevent scheduling overlaps.
  - `inspection_checkpoints`: Critical phases requiring visual inspections (e.g., plumbing leak tests, load-bearing validations).
